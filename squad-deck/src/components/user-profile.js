import { useState, useEffect, useContext, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { SdUserContext } from "../components/sd-user-context";
import { gradeEmblemUrl, occupationEmblemUrl } from "../helpers/grade-emblems";
import SearchContext from "./SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faCheck,
  faUser,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const { sdUser, setSdUser } = useContext(SdUserContext);
  const { data, setData } = useContext(SearchContext);
  const [editMode, setEditMode] = useState(false);
  const [update, setUpdate] = useState({});
  const [imageUpload, setImageUpload] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const isChecked = useRef(true);
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

  // Fetch all alpha roster info by user unit id
  useEffect(() => {
    if (isMounted.current) {
      if (sdUser.length && !data.length) {
        const fetchAlphaRoster = async () => {
          const response = await fetch(`http://localhost:8080/units/${sdUser[0].user_unit_id}/roster`);
          // replace unit number with --> ${sdUser[0].user_unit_id}
          const results = await response.json();
          setData(results);
        };
        fetchAlphaRoster();
      }
    } else {
      isMounted.current = true;
    }
  }, [sdUser, submitted]);

  const handleEditModeClick = (e) => {
    setEditMode(true);
  };

  // Commit card edits to db and return card to read mode
  const handleSaveClick = (e, el) => {
    setEditMode(false);
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

  // Write user input to update form
  const handleChange = (e) => {
    setUpdate((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const displayDependents = (num) => {
    const dependentsArray = [];
    for (let i = 0; i < num; i++) {
      dependentsArray.push(
        <FontAwesomeIcon
          icon={faUser}
          color={"black"}
          size={"sm"}
          key={i * 8}
        />
      );
    }

    return <>{dependentsArray}</>;
  };

  return (
    <>
      <div className="user-profile-container">
        <div className="profile-col1">
          <div className="user-profile-title">
            <h3>My Profile</h3>
          </div>
          <div className="user-profile-details">
            <h4>Name: {user?.name}</h4>
            <h4>Username: {user.nickname}</h4>
            <h4>Email: {user?.email}</h4>
            <h4>Role: {sdUser[0]?.role}</h4>
            <h4>Unit: {sdUser[0]?.unit_abbr}</h4>
            <h4>Location: {data?.unit_station}</h4>
          </div>
        </div>
        <div className="user-cards-container">
          <div className="user-card-title">
            <h3>My Card</h3>
          </div>
          {/* user.name */}
          {data?.alpha_roster &&
            data?.alpha_roster
              .filter((el) => el.full_name === `${user.name}`)
              .map((el, indx) => {
                return (
                  <>
                    {editMode ? (
                      <>
                     
                        <div className="user-card-front">
                          <div className="user-card-hdr">
                            <select
                              onChange={handleChange}
                              id="grade"
                              name="grade"
                              className="user-card-edit-dropdown">
                              {Object.keys(gradeEmblemUrl).map((grade) => {
                                return <option value={grade}>{grade}</option>;
                              })}
                            </select>
                            <input
                              type="text"
                              name="full_name"
                              id="full_name"
                              className="user-card-edit-input"
                              placeholder={el.full_name}
                              onChange={handleChange}
                            />
                            <p>{el.doe}</p>
                          </div>
                          <img
                            src={el.personal_img}
                            alt={el.full_name + " profile_picture"}
                            className="user-card-profile-picture"
                          />
                          <div className="user-card-update-pic-container">
                            <input
                              type="file"
                              onChange={(e) =>
                                setImageUpload(e.target.files[0])
                              }
                            />
                            <button
                              className="user-card-image-upload-button"
                              onClick={(e) => uploadImage(e, el)}>
                              <FontAwesomeIcon icon={faUpload} />
                            </button>
                          </div>
                          <div className="user-card-duty-info">
                            <label
                              className="duty-title-input-label"
                              htmlFor="duty_title">
                              Duty Title:
                            </label> <br />
                            <input
                              type="text"
                              name="duty_title"
                              id="duty_title"
                              className="card-edit-input"
                              placeholder={el.duty_title}
                              onChange={handleChange}
                            /> <br />
                            <label
                              className="duty-title-input-label"
                              htmlFor="supv_name">
                              Supervisor:
                            </label> <br />
                            <input
                              type="text"
                              name="supv_name"
                              id="supv_name"
                              className="card-edit-input"
                              placeholder={el.supv_name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="user-card-back">
                          <div className="user-card-go_by-edit-container">
                            <label className="go_by-edit-label" htmlFor="go_by">
                              Go By:
                            </label> 
                            <input
                              type="text"
                              name="go_by"
                              id="go_by"
                              className="card-edit-input"
                              placeholder={el.go_by}
                              onChange={handleChange}
                            />
                          </div>
                          <hr />
                          <h4 className="edit-mde-hometown">Hometown</h4>
                          <p>
                            {el.home_city}, {el.home_state}
                          </p>
                          <h4>Family</h4>
                          <div className="user-card-dependents-edit-container">
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
                                  className="user-card-children-num-input"
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
                                  className="user-card-children-num-input"
                                  onChange={handleChange}
                                />
                              </>
                            )}
                          </div>
                          <div className="user-card-edit-hobbies-container">
                            <label
                              className="user-card-hobbies-label"
                              htmlFor="favorite_movie">
                              Favorite Movie
                            </label> < br/ >
                            <input
                              type="text"
                              name="favorite_movie"
                              id="favorite_movie"
                              className="card-edit-input"
                              placeholder={el.favorite_movie}
                              onChange={handleChange}
                            /> < br/ >
                            <label
                              className="user-card-hobbies-label"
                              htmlFor="hobbies">
                              Hobbies
                            </label> < br/ >
                            <input
                              type="text"
                              name="hobbies"
                              id="hobbies"
                              className="card-edit-input"
                              placeholder={el.hobbies}
                              onChange={handleChange}
                            /> < br/ >
                          </div>
                      
                      </div>
                      </>
                    ) : (
                      <>
                        <div className="user-card-front">
                          <div className="user-card-hdr">
                            {el.grade !== "" && (
                              <>
                                <img
                                  src={gradeEmblemUrl[el.grade]}
                                  alt={el.name + " grade"}
                                  height="20px"
                                />
                              </>
                            )}
                            <h4>{el.full_name}</h4>
                            <p>{el.doe}</p>
                          </div>
                          <img
                            src={el.personal_img}
                            alt={el.full_name + " profile_picture"}
                            className="user-card-profile-picture"
                            height="200px"
                          />
                          <div className="user-card-duty-info">
                            <h4>{el.duty_title}</h4>
                            <p>{el.cafsc}</p>
                            <h4>Supervisor:</h4>
                            <p>{el.supv_name}</p>
                          </div>
                          <img
                            src={occupationEmblemUrl[el.cafsc.substring(0, 3)]}
                            alt={el.name + " career field"}
                            className="user-card-career-field-emblem"
                          />
                          <img
                            src={el.achievement_img}
                            alt={el.full_name + "achievements"}
                            height="15px"
                            className="user-card-achievements-img"
                          />
                          <div className="card-edit-button-container"></div>
                        </div>

                        <div className="user-card-back">
                          <h3>{el.go_by}</h3>
                          <hr />
                          <div className="user-card-dependents-container">
                            {el.marital_status === "M" && (
                              <FontAwesomeIcon
                                icon={faUser}
                                color={"black"}
                                size={"2x"}
                              />
                            )}
                            {el.children_num > 0 &&
                              displayDependents(el.children_num)}
                          </div>
                          <div className="user-card-hobbies-container">
                            <h4>Favorite Movie</h4>
                            <p>{el.favorite_movie}</p>
                            <h4>Hobbies</h4>
                            <p>{el.hobbies}</p>
                          </div>
                        </div>
                      </>
                    )}
                    <div className="edit-save-button-container">
                      {editMode ? (
                        <button
                          className="card-save-button"
                          onClick={(e) => handleSaveClick(e, el)}>
                          Save
                        </button>
                      ) : (
                        <button
                          className="card-edit-button"
                          onClick={handleEditModeClick}>
                          Edit
                        </button>
                      )}
                    </div>
                  </>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default Profile;
