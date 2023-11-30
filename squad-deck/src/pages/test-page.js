import { useContext, useEffect, useRef, useState } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const TestPage = () => {
  const ref = useRef();
  const [editMode, setEditMode] = useState(false);
  const [update, setUpdate] = useState({})
  const clickedCard = useRef()
  const foo = ['foo', 'bar', 'baz', 'bing', 'qux']




  const handleEditModeClick = (e, elem) => {
    e.stopPropagation()
    clickedCard.current = elem
    setEditMode(true)
  };

  const handleSaveClick = (e) => {
    setEditMode(false)
    clickedCard.current = null

    const submitUpdates = async () => {
        const response = await fetch('api',
        )
    }
  };

  const handleChange = (e) => {

  }


  return (
    <>
      <h1>This is a test page</h1>
      <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
        {foo.map((elem, indx) => {
            return (
              <div key={"fippy-" + indx}>
                {(editMode && clickedCard.current == elem) ? (
                  <Flippy
                    className="FlippyCard"
                    flipOnHover={false}
                    flipOnClick={false}
                    flipDirection="horizontal"
                    style={{ width: "200px", height: "200px" }}
                  >
                    <FrontSide
                      style={{ backgroundColor: "#41669d" }}
                    >
                      <h1>Front</h1>
                      <h3>Edit Mode</h3>
                      <p>{elem}</p>
                      <input 
                        type="text" 
                        name="foo" 
                        placeholder="Now you can edit"
                      />
                      <button onClick={handleSaveClick}>Save</button>
                    </FrontSide>
                    <BackSide style={{ backgroundColor: "#175852" }}>
                      <h1>Back</h1>
                      <p>{elem}</p>
                      <input 
                        type="text" 
                        name="bar" 
                        placeholder="Now you can edit"
                      />
                      <button onClick={handleSaveClick}>Save</button>
                    </BackSide>
                  </Flippy>
                ) : (
                  <Flippy
                    className="FlippyCard"
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                    ref={ref}
                    style={{ width: "200px", height: "200px" }}
                  >
                    <FrontSide
                      style={{ backgroundColor: "#41669d" }}
                    >
                      <h1>Front</h1>
                      <h3>FlippableMode</h3>
                      <p>{elem}</p>
                      <p>Can't edit this text</p>
                      <button
                        onClick={e => handleEditModeClick(e, elem)}
                        style={{ zIndex: "999" }}
                      >
                        Edit
                      </button>
                    </FrontSide>
                    <BackSide
                      style={{ backgroundColor: "#175852" }}

                    >
                      <h1>Back</h1>
                      <h3>Flippable Mode</h3>
                      <p>{elem}</p>
                      <p>Can't edit this either</p>
                      <button
                        onClick={e => handleEditModeClick(e, elem)}
                        style={{ zIndex: "999" }}
                      >
                        Edit
                      </button>
                    </BackSide>
                  </Flippy>
                )}
              </div>
            );
        })}
      </div>
      {/* {editMode ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditModeClick}>Edit</button>
      )} */}
      {/* <button onClick={handleEditModeClick}>Edit</button>
      <button onClick={handleSaveClick}>Save</button> */}
    </>
  );
};

export default TestPage;
