import { useState, useEffect, useContext, useRef, useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { SdUserContext } from "./sd-user-context";
import ReactFlow, {
  Controls,
  Background,
  Position,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";

const OrgChart = () => {
  const { user, isAuthenticated } = useAuth0();
  const { sdUser, setSdUser } = useContext(SdUserContext);
  const [workCenters, setWorkCenters] = useState([]);
  const [nodes, setNodes] = useState();
  const [edges, setEdges] = useState();
  const isMounted = useRef(false);


  // Fetch additional logged in user details from db to get user unit id
  useEffect(() => {
    if (isAuthenticated && sdUser.length === 0) {
      const fetchUserDetails = async () => {
        const response = await fetch(`http://localhost:8080/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.email }),
        });
        if (response.ok) {
          const data = await response.json();
          setSdUser(data);
        }
      };
      fetchUserDetails();
    }
  }, []);

  // Fetch all workcenters by user unit id
  useEffect(() => {
    if (sdUser.length) {
      const fetchAlphaRoster = async () => {
        const response = await fetch(
          `http://localhost:8080/units/${sdUser[0].user_unit_id}/roster`
        );
        const results = await response.json();
        setWorkCenters([...results.workcenters]);
      };
      fetchAlphaRoster();
    }
  }, []);

  // Build org chart
  useEffect(() => {
    if (isMounted.current) {
      // Find parents
      const findParents = () => {
        const parents = [];
        for (let shop of workCenters) {
          parents.push(shop["workcenter_parent"]);
        }

        return [...new Set(parents)];
      };
      const parents = findParents();

      // Determine heirarchy
      const findHierarchy = () => {
        const hierarchy = [];
        for (let parent of parents) {
          hierarchy.push({
            parent: parent,
            children: workCenters.filter(
              (el) => el.workcenter_parent === parent
            ),
          });
        }
        return hierarchy;
      };
      const hierarchy = findHierarchy();

      // Create org chart nodes
      const createNodes = () => {
        const nodes = [];
        let parent_x = 0
        let parent_y = 100
        let child_x = 100
        let child_y = 150
        for (let parent of hierarchy) {
          // create top level nodes
          nodes.push({
            id: parent.parent,
            position: { x: parent_x, y: parent_y },
            data: {
              label: parent.parent,
            },
            targetPosition: Position.Top,
            sourcePosition: Position.Bottom,
            selected: false,
            style: { width: 100, height: 100 },
          });
          parent_x += 100
          parent_y += 100
          // create child nodes
          for (let child of parent.children) {
            if (!parents.includes(child.workcenter_abbr))
              nodes.push({
                id: child.workcenter_abbr,
                position: { x: child_x, y: child_y },
                data: {
                  label: child.workcenter_abbr,
                },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                selected: false,
                style: { width: 100, height: 100 },
              });
              child_x += 100
              child_y += 100
          }    
        }

        return nodes;
      };
      const nodes = createNodes();

      // Create node edges
      const createEdges = () => {
        const edges = [];
        for (let parent of hierarchy) {
          for (let child of parent.children) {
            edges.push({
              id: `${parent.parent}-${child.workcenter_abbr}`,
              source: parent.parent,
              target: child.workcenter_abbr,
              type: "smoothstep",
            });
          }
        }
        return edges;
      };

      const edges = createEdges();
      setNodes(nodes);
      setEdges(edges);
    } else {
      isMounted.current = true
    }
  }, [workCenters]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const chartStyle = {
    height: 800,
    width: 1000,
  };

  return (
    <>
      <div className="flow-container">
        <div className="flow-container-item">
          <div style={chartStyle}>
            <ReactFlow
              nodes={nodes}
              onNodesChange={onNodesChange}
              edges={edges}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
            >
              <Background />
              <Controls />
              <MiniMap />
            </ReactFlow>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrgChart;
