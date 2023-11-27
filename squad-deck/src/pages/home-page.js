import { useContext, useEffect, useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import PageLayout from "../components/page-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  // faPencil,
  faCheck,
  faUser,
  faUpload,
  // faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { SdUserContext } from "../components/sd-user-context";
import SearchContext from "../components/SearchContext";
import SearchBar from "../components/SearchBar/SearchBar";
import { gradeEmblemUrl } from "../helpers/grade-emblems";
import { occupationEmblemUrl } from "../helpers/grade-emblems";
import "../Styled/home-page.css";
import "../Styled/search-bar.css";
import { RosterUploadContext } from "../components/roster-upload-context";

const HomePage = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { searchData, setSearchData } = useContext(SearchContext);
  const { sdUser, setSdUser } = useContext(SdUserContext);
  const { data, setData } = useContext(SearchContext);
  const { rosterUpload, setRosterUpload } = useContext(RosterUploadContext);
  const cardRef = useRef();
  const [editMode, setEditMode] = useState(false);
  const [update, setUpdate] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const clickedCard = useRef();
  const isMounted = useRef(false);
  const isChecked = useRef(true);
  const date = new Date();

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

  // Fetch all alpha roster info by user unit id
  useEffect(() => {
    if (isMounted.current) {
      if (sdUser.length) {
        const fetchAlphaRoster = async () => {
          const response = await fetch(
            `http://localhost:8080/units/${sdUser[0].user_unit_id}/roster`
          );
          const results = await response.json();
          setData(results);
        };
        fetchAlphaRoster();
      }
    } else {
      isMounted.current = true;
    }
  }, [sdUser, submitted]);

  // If a new alpha roster was uploaded on the alpha roster upload page, toggle submitted to re-fetch card data
  useEffect(() => {
    if (rosterUpload === true) {
      setSubmitted(!submitted);
      setRosterUpload(false);
    }
  }, []);

  // Set card to write mode
  const handleEditModeClick = (e, elem) => {
    e.stopPropagation();
    clickedCard.current = elem;
    setEditMode(true);
  };

  // Write user input to update form
  const handleChange = (e) => {
    setUpdate((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // Commit card edits to db and return card to read mode
  const handleSaveClick = (e, el) => {
    setEditMode(false);
    clickedCard.current = null;
    isChecked.current = true;

    const updateObj = {
      ...update,
      alpha_roster_id: el.id,
    };
    setUpdate({});

    const submitUpdates = async () => {
      const response = await fetch(
        `http://localhost:8080/units/${sdUser[0].user_unit_id}/roster/${el.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateObj),
        }
      );
      if (response.ok) {
        setSubmitted(!submitted);
      }
    };
    submitUpdates();
  };

  // Upload new personal image
  const uploadImage = async (e, el) => {
    if (imageUpload === null) return;
    const imageRef = ref(
      storage,
      `squad-deck/card/portraits/$${v4()}-${imageUpload.name}`
    );

    const response = await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(imageRef);

    const uploadObj = {
      personal_img: url,
      alpha_roster_id: el.id,
    };

    const writeUrlToDb = async () => {
      const response = await fetch(
        `http://localhost:8080/units/${sdUser[0].user_unit_id}/roster/${el.id}`,
        {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(uploadObj),
        }
      );
      window.alert("New profile picture uploaded successfully");
    };
    writeUrlToDb();
    setImageUpload(null);
  };

  const displayDependents = (num) => {
    const dependentsArray = [];
    for (let i = 0; i < num; i++) {
      dependentsArray.push(
        <FontAwesomeIcon
          icon={faUser}
          color={"white"}
          size={"sm"}
          key={i * 8}
        />
      );
    }

    return <>{dependentsArray}</>;
  };

  // const toggleShowFamily = () => {
  //   if (isHidden.current) {
  //     isHidden.current = false
  //   } else {
  //     isHidden.current = true
  //   }
  // }

  return (
    <>
      <PageLayout>
        <div className="cardCntHdr">
          <div className="unitHdr">
            <img
              src={data.unit_emblem_url}
              alt={data.unit_abbr + "emblem"}
              className="unitImg"
            />
            <h1 className="unitHdr">{data.unit_abbr} SquadDeck</h1>
          </div>
          <SearchBar className="searchBarCp" />
        </div>
        <div className="cardCnt">
          {(searchData?.length > 0 ? searchData : data?.alpha_roster || []).map(
            (el, indx) => {
              return (
                <div key={indx}>
                  {editMode && clickedCard.current == el ? (
                    // Card edit mode
                    <Flippy
                      className="FlippyCard"
                      flipOnHover={false}
                      flipOnClick={false}
                      flipDirection="horizontal"
                      ref={cardRef}
                      key={indx}>
                      <FrontSide className="FrontSide">
                        <div className="whole-card">
                          <div className="cdHdr">
                            <select
                              onChange={handleChange}
                              id="grade"
                              name="grade"
                              className="card-edit-dropdown">
                              {Object.keys(gradeEmblemUrl).map((grade) => {
                                return <option value={grade}>{grade}</option>;
                              })}
                            </select>
                            <div className="card-edit-div">
                              <input
                                type="text"
                                name="full_name"
                                id="full_name"
                                className="card-edit-input"
                                placeholder={el.full_name}
                                onChange={handleChange}
                              />
                            </div>
                            <p>{el.doe}</p>
                          </div>
                          <img
                            src={el.personal_img}
                            alt={el.full_name + "profile picture"}
                            height="100px"
                          />
                          <input
                            type="file"
                            onChange={(e) => {
                              setImageUpload(e.target.files[0]);
                            }}
                          />
                          <button
                            onClick={(e) => {
                              uploadImage(e, el);
                            }}>
                            <FontAwesomeIcon icon={faUpload} />
                          </button>
                          <input
                            type="text"
                            name="duty_title"
                            id="duty_title"
                            className="card-edit-input"
                            placeholder={el.duty_title}
                            onChange={handleChange}
                          />
                          <p>{el.cafsc}</p>
                          <img
                            src={el.career_field_img}
                            alt={el.name + "career field"}
                            className="career-field-emblem"
                          />
                          <label htmlFor="supv_name">Supervisor:</label>
                          <input
                            type="text"
                            name="supv_name"
                            id="supv_name"
                            className="card-edit-input"
                            placeholder={el.supv_name}
                            onChange={handleChange}
                          />
                          <img
                            src={el.achievement_img}
                            alt={el.full_name + "achievements"}
                            height="15px"
                          />
                          <button
                            className="edit-save-button"
                            onClick={(e) => handleSaveClick(e, el)}
                            style={{
                              zIndex: "999",
                              border: "none",
                              backgroundColor: "transparent",
                              backgroundRepeat: "no-repeat",
                              cursor: "pointer",
                              overflow: "hidden",
                            }}>
                            <FontAwesomeIcon
                              className="edit-save-button"
                              icon={faCheck}
                              color="white"
                            />
                          </button>
                        </div>
                      </FrontSide>
                      <BackSide className="BackSide">
                        <input
                          type="text"
                          name="go_by"
                          id="go_by"
                          placeholder={el.go_by}
                          onChange={handleChange}
                        />
                        <hr />
                        <h4>Hometown</h4>
                        <p>
                          {el.home_city}, {el.home_state}
                        </p>
                        <h4>Family</h4>
                        {/* <input
                              type="checkbox"
                              name="hide_family"
                              id="hide_family"
                              value="true"
                              onChange={toggleShowFamily}
                            /> */}
                        {el.marital_status === "M" ? (
                          <>
                            <label htmlFor="marital_status">Spouse</label>
                            <input
                              type="checkbox"
                              name="marital_status"
                              id="marital_status"
                              className="card-edit-checkbox"
                              value="D"
                              checked={isChecked.current}
                              onClick={(e) => (isChecked.current = false)}
                              onChange={handleChange}
                            />
                            <br />
                            <label htmlFor="children_num">Children</label>
                            <input
                              type="number"
                              name="children_num"
                              id="children_num"
                              min="0"
                              max="10"
                              onChange={handleChange}
                            />
                          </>
                        ) : (
                          <>
                            <label htmlFor="marital_status">Spouse</label>
                            <input
                              type="checkbox"
                              name="marital_status"
                              id="marital_status"
                              className="card-edit-checkbox"
                              value="M"
                              onChange={handleChange}
                            />
                            <br />
                            <label htmlFor="children_num">Children</label>
                            <input
                              type="number"
                              name="children_num"
                              id="children_num"
                              min="0"
                              max="10"
                              onChange={handleChange}
                            />
                          </>
                        )}
                        <label htmlFor="favorite_movie">Favorite Movie</label>
                        <input
                          type="text"
                          name="favorite_movie"
                          id="favorite_movie"
                          placeholder={el.favorite_movie}
                          onChange={handleChange}
                        />
                        <label htmlFor="hobbies">Hobbies</label>
                        <input
                          type="text"
                          name="hobbies"
                          id="hobbies"
                          placeholder={el.hobbies}
                          onChange={handleChange}
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
                          }}>
                          <FontAwesomeIcon
                            className="save-button"
                            icon={faCheck}
                            color="white"
                          />
                        </button>
                      </BackSide>
                    </Flippy>
                  ) : (
                    // Card read mode
                    <Flippy
                      className="FlippyCard"
                      flipOnHover={false}
                      flipOnClick={true}
                      flipDirection="horizontal"
                      ref={cardRef}
                      key={indx}>
                      <FrontSide className="FrontSide">
                        <div className="whole-card">
                          <div className="cdHdr">
                            {el.grade !== "" && (
                              <>
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
                            className="profile-picture"
                            height="200px"
                          />
                          <div className="duty-info">
                          <h4>{el.duty_title}</h4>
                          <p>{el.cafsc}</p>
                          <img
                            src={occupationEmblemUrl[el.cafsc.substring(0, 3)]}
                            alt={el.name + "career field"}
                            height="20px"
                            className="career-field-emblem"
                          />
                          <h4>Supervisor:</h4>
                          <p>{el.supv_name}</p>
                          </div>
                          <img
                            src={el.achievement_img}
                            alt={el.full_name + "achievements"}
                            height="15px"
                            className="achievements-img"
                          />
                          <button
                            onClick={(e) => handleEditModeClick(e, el)}
                            style={{
                              zIndex: "999",
                              border: "none",
                              backgroundColor: "transparent",
                              backgroundRepeat: "no-repeat",
                              cursor: "pointer",
                              overflow: "hidden",
                            }}>
                            <FontAwesomeIcon
                              className="edit-button"
                              icon={faPen}
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
                        <div className="dependents-container">
                          {el.marital_status === "M" && (
                            <FontAwesomeIcon
                              icon={faUser}
                              color={"white"}
                              size={"lg"}
                            />
                          )}
                          {el.children_num > 0 &&
                            displayDependents(el.children_num)}
                        </div>
                        {/* </>
                      )
                      } */}
                        {/* <p>{el.spouse_name !== "" && <span><strong>Spouse:</strong> {el.spouse_name}</span>},&nbsp;<span><strong>Children:</strong> {el.children_names}</span></p> */}
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
                          }}>
                          <FontAwesomeIcon
                            className="edit-button"
                            icon={faPen}
                            color="white"
                          />
                        </button>
                      </BackSide>
                    </Flippy>
                  )}
                </div>
              );
            }
          )}
        </div>
        {/* <Dropzone /> */}
      </PageLayout>
    </>
  );
};

export default HomePage;
