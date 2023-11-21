import { useContext, useEffect, useRef, useState } from "react";
import PageLayout from "../components/page-layout";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropzone from "../components/Dropzone";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "../Styled/home-page.css";
import "../Styled/search-bar.css";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import { SdUserContext } from "../components/sd-user-context";
import { faPencil, faCheck, faUser } from "@fortawesome/free-solid-svg-icons";
import SearchContext from "../components/SearchContext";
import SearchBar from "../components/SearchBar/SearchBar";
import { gradeEmblemUrl } from "../helpers/grade-emblems";

const HomePage = () => {
  const { user, isAuthenticated } = useAuth0();
  const { searchData, setSearchData } = useContext(SearchContext);
  const { sdUser, setSdUser } = useContext(SdUserContext);
  const { data, setData } = useContext(SearchContext);
  const ref = useRef();
  const [editMode, setEditMode] = useState(false);
  const [update, setUpdate] = useState({});
  const clickedCard = useRef();
  const isSubmitted = useRef(false)
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
  }, [sdUser, isSubmitted.current]);

  const handleEditModeClick = (e, elem) => {
    e.stopPropagation();
    clickedCard.current = elem;
    setEditMode(true);
  };

  const handleChange = (e) => {
    setUpdate((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSaveClick = (e, el) => {
    setEditMode(false);
    clickedCard.current = null;
    isSubmitted.current = !isSubmitted.current

    const updateObj = {
      ...update,
      alpha_roster_id: el.id
    }
    setUpdate({})

    const submitUpdates = async () => {
      const response = await fetch(
        `http://localhost:8080/units/${sdUser[0].user_unit_id}/roster/${el.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updateObj)
        }
      );
    };
    submitUpdates()
  };

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
        <div className="cardCntHdr">
          <h1 className="unitHdr">{data.unit_abbr} SquadDeck</h1>
          <SearchBar className="searchBarCp"/>
        </div>
          <Link to="/org">Org Chart</Link>
        <div className="cardCnt">
          {(searchData?.length > 0 ? searchData : data?.alpha_roster || []).map((el, indx) => {
            return (
              <div>
                {editMode && clickedCard.current == el ? (
                  <Flippy
                    className="FlippyCard"
                    flipOnHover={false}
                    flipOnClick={false}
                    flipDirection="horizontal"
                    ref={ref}
                    key={indx}
                  >
                    <FrontSide className="FrontSide">
                      <div className="whole-card">
                        <div className="cdHdr">
                          <select 
                            onChange={handleChange}
                            id="grade"
                            name="grade" 
                          >
                            {Object.keys(gradeEmblemUrl).map(grade => {
                              return <option value={grade}>{grade}</option>
                            })}
                          </select>
                          <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            placeholder={el.full_name}
                            onChange={handleChange}
                          />
                          <p>{el.doe}</p>
                        </div>
                        <img
                          src={el.personal_img}
                          alt={el.full_name + "profile picture"}
                          height="100px"
                        />
                        <input
                          type="text"
                          name="duty_title"
                          id="duty_title"
                          placeholder={el.duty_title}
                          onChange={handleChange}
                        />
                        <p>{el.cafsc}</p>
                        <img
                          src={el.career_field_img}
                          alt={el.name + "career field"}
                          height="20px"
                        />
                        <h4>Supervisor:</h4>
                        <input
                          type="text"
                          name="supv_name"
                          id="supv_name"
                          placeholder={el.supv_name}
                          // value={el.supv_name}
                          onChange={handleChange}
                        />
                        <img
                          src={el.achievement_img}
                          alt={el.full_name + "achievements"}
                          height="15px"
                        />
                        <button
                          className="save-button"
                          onClick={(e) => handleSaveClick(e, el)}
                          style={{
                            zIndex: "999",
                            border: "none",
                            backgroundColor: "transparent",
                            backgroundRepeat: "no-repeat",
                            cursor: "pointer",
                            overflow: "hidden",
                          }}
                        >
                          <FontAwesomeIcon
                            className="save-button"
                            icon={faCheck}
                            color="white"
                          />
                        </button>
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
                        {el.children_num > 0 &&
                          displayDependents(el.children_num)}
                      </div>
                      <h4>Favorite Movie</h4>
                      <input
                        type="text"
                        name="favorite_movie"
                        id="favorite_movie"
                        placeholder={el.favorite_movie}
                        // value={el.favorite_movie}
                        onChange={handleChange}
                      />
                      <h4>Hobbies</h4>
                      <input
                        type="text"
                        name="hobbies"
                        id="hobbies"
                        placeholder={el.hobbies}
                        onChange={handleChange}
                      />
                      {/* <h4>Interesting Fact</h4>
                    <p>{el.interesting_fact}</p> */}
                      <button
                        className="save-button"
                        onClick={(e) => handleSaveClick(e, el)}
                        style={{
                          zIndex: "999",
                          border: "none",
                          backgroundColor: "transparent",
                          backgroundRepeat: "no-repeat",
                          cursor: "pointer",
                          overflow: "hidden",
                        }}
                      >
                        <FontAwesomeIcon
                          className="save-button"
                          icon={faCheck}
                          color="white"
                        />
                      </button>
                    </BackSide>
                  </Flippy>
                ) : (
                  <Flippy
                    className="FlippyCard"
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                    ref={ref}
                    key={indx}
                  >
                    <FrontSide className="FrontSide">
                      <div className="whole-card">
                        <div className="cdHdr">
                          {el.grade !== "" && (
                            <>
                              {/* <p>{el.grade}</p> */}
                              <img
                                src={gradeEmblemUrl[el.grade]}
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
                        <button
                          className="edit-button"
                          onClick={(e) => handleEditModeClick(e, el)}
                          style={{
                            zIndex: "999",
                            border: "none",
                            backgroundColor: "transparent",
                            backgroundRepeat: "no-repeat",
                            cursor: "pointer",
                            overflow: "hidden",
                          }}
                        >
                          <FontAwesomeIcon
                            className="edit-button"
                            icon={faPencil}
                            color="white"
                          />
                        </button>
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
                        {el.children_num > 0 &&
                          displayDependents(el.children_num)}
                      </div>
                      <h4>Favorite Movie</h4>
                      <p>{el.favorite_movie}</p>
                      <h4>Hobbies</h4>
                      <p>{el.hobbies}</p>
                      {/* <h4>Interesting Fact</h4>
                    <p>{el.interesting_fact}</p> */}
                      <button
                        className="edit-button"
                        onClick={(e) => handleEditModeClick(e, el)}
                        style={{
                          zIndex: "999",
                          border: "none",
                          backgroundColor: "transparent",
                          backgroundRepeat: "no-repeat",
                          cursor: "pointer",
                          overflow: "hidden",
                        }}
                      >
                        <FontAwesomeIcon
                          className="edit-button"
                          icon={faPencil}
                          color="white"
                        />
                      </button>
                    </BackSide>
                  </Flippy>
                )}
              </div>
            );
          })}
        </div>
        {/* <Dropzone /> */}
      </PageLayout>
    </>
  );
};

export default HomePage;
