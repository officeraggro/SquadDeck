import { useContext, useEffect, useRef, useState } from "react";
import PageLayout from "../components/page-layout";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropzone from "../components/Dropzone";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "../Styled/home-page.css";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import { SdUserContext } from "../components/sd-user-context";
import { faPencil, faCheck, faUser } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const { user, isAuthenticated } = useAuth0();
  const { sdUser, setSdUser } = useContext(SdUserContext);
  const [data, setData] = useState([]);
  const ref = useRef();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchUserDetails = async () => {
        const response = await fetch(
          `http://localhost:8080/users/${user.email}`
        );
        if (response.ok) {
          const data = await response.json();
          setSdUser(data);
        }
      };
      fetchUserDetails();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (sdUser.length) {
      const fetchAlphaRoster = async () => {
        const response = await fetch(
          `http://localhost:8080/units/${sdUser[0].user_unit_id}/roster`
        );
        const data = await response.json();
        setData(data);
      };
      fetchAlphaRoster();
    }
  }, [sdUser]);

  const displayDependents = (num) => {
    const dependentsArray = [];
    for (let i = 0; i <= num; i++) {
      dependentsArray.push(
        <FontAwesomeIcon
          icon={faUser}
          color={"white"}
          size={"sm"}
          key={i * 8}
        />
      );

      return <>{dependentsArray}</>;
    }
  };

  return (
    <>
      <PageLayout>
        <h1>{data.unit_abbr} SquadDeck</h1>
        <Link to="/org">Org Chart</Link>
        <div className="cardCnt">
          {data?.alpha_roster?.map((el, indx) => {
            return (
              <Flippy
                className="FlippyCard"
                flipOnHover={false}
                flipOnClick={true}
                flipDirection="horizontal"
                ref={ref}
                key={indx}
              >
                <FrontSide className="FrontSide">
                  <div className="cdHdr">
                    {el.grade !== "" && (
                      <>
                        {/* <p>{el.grade}</p> */}
                        <img
                          src={el.grade_emblem_img}
                          alt={el.name + "grade"}
                          height="20px"
                        />
                      </>
                    )}
                    <h4>{el.full_name}</h4>
                    <p>{el.doe}</p>
                  </div>
                  <img
                    src={el.personal_img}
                    alt={el.full_name + "profile picture"}
                    height="100px"
                  />
                  <h4>{el.duty_title}</h4>
                  <p>{el.cafsc}</p>
                  <img
                    src={el.career_field_img}
                    alt={el.name + "career field"}
                    height="20px"
                  />
                  <h4>Supervisor:</h4>
                  <p>{el.supv_name}</p>
                  <img
                    src={el.achievement_img}
                    alt={el.full_name + "achievements"}
                    height="15px"
                  />
                  <div>
                    <FontAwesomeIcon icon={faPencil} />
                  </div>
                </FrontSide>
                <BackSide className="BackSide">
                  <h3>{el.go_by}</h3>
                  <hr />
                  <h4>Hometown</h4>
                  <p>
                    {el.home_city}, {el.home_state}
                  </p>
                  <h4>Family</h4>
                  <div className="dependents">
                    {el.spouse_name !== "" && (
                      <FontAwesomeIcon
                        icon={faUser}
                        color={"white"}
                        size={"lg"}
                      />
                    )}
                    {el.children_num > 0 && displayDependents(el.children_num)}
                  </div>
                  <h4>Favorite Movie</h4>
                  <p>{el.favorite_movie}</p>
                  <h4>Hobbies</h4>
                  <p>{el.hobbies}</p>
                  {/* <h4>Interesting Fact</h4>
                  <p>{el.interesting_fact}</p> */}
                  <FontAwesomeIcon icon={faPencil} />
                </BackSide>
              </Flippy>
            );
          })}
        </div>
        {/* <Dropzone /> */}
      </PageLayout>
    </>
  );
};

export default HomePage;
