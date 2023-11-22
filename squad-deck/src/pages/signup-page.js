import { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import '../Styled/signup-page.css'

const SignupPage = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const [units, setUnits] = useState();
  const [form, setForm] = useState({
    name: "",
    unit: "",
    email: "",
    username: "",
    password: "",
    passwordRepeat: "",
  });

  useEffect(() => {
    const fetchUnits = async () => {
      const response = await fetch('http://localhost:8080/units')
      const data = await response.json()
      setUnits(data)
    }
    fetchUnits()
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault();

    await loginWithRedirect({
      appState: {
        returnTo: "/home",
      },
    });
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const full_name = form.name.split(" ");

    if (form.password === form.passwordRepeat) {
      const userForm = {
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        email: form.email,
        password: form.password,
        connection: process.env.REACT_APP_AUTH0_CONNECTION,
        username: form.username,
        given_name: full_name[0],
        family_name: full_name[1],
        name: form.name,
        nickname: form.username,
        picture: "http://example.org/jdoe.png",
        user_metadata: {},
      };
      createNewAuth0User(userForm);
      e.target.reset();
      navigate("/");
    } else {
      window.alert("Passwords do not match.");
      e.target.reset();
    }
  };

  const createNewAuth0User = async (userObj) => {
    console.log(userObj)
    const signupUrl =
      "https://" + process.env.REACT_APP_AUTH0_DOMAIN + "/dbconnections/signup";

    const response = await fetch(signupUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });
    if (response.ok) {
      const data = await response.json();
      const unit = units.filter((unit) => unit.unit_abbr === form.unit)
      
      const dbForm = {
        email: data.email,
        uname: data.username,
        user_id: data._id,
        user_profile_img: data.picture,
        unit_abbr: form.unit,
        role: "user",
        user_unit_id: unit[0].id
      };
      createNewUserDbEntry(dbForm);
    }
  };

  const createNewUserDbEntry = async (dbObj) => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dbObj),
    });
    if (response.ok) {
      const data = await response.json();
    }
  };

  return (
    <section className="signup-main">
      <div className="signup-grid-container">
        <div className="signup-form-container">
          <form onSubmit={handleSignUp}>
            <header className="signup-header">Sign Up</header>
            <div>
              {/* <label htmlFor="name" className="form-input-label">
                Name
              </label> */}
              <br />
              <input
                type="text"
                placeholder="Enter Name"
                id="name"
                name="name"
                className="signup-input"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              {/* <label htmlFor="unit" className="form-input-label">
                Unit
              </label> */}
              <br />
              <select
                className="signup-units-dropdown"
                onChange={handleChange}
                id="unit"
                name="unit"
                required
              >
                <option value="Select unit">Select unit</option>
                {units?.map((unit, indx) => (
                  <option value={unit.unit_abbr} key={indx}>
                    {unit.unit_abbr}
                  </option>
                ))}
              </select>
              <br />
            </div>
            <div>
              {/* <label htmlFor="username" className="form-input-label">
                Username
              </label> */}
              <br />
              <input
                type="text"
                placeholder="Enter Username"
                id="username"
                name="username"
                className="signup-input"
                required
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              {/* <label htmlFor="email" className="form-input-label">
                Email
              </label> */}
              <br />
              <input
                type="text"
                placeholder="Enter Email"
                id="email"
                name="email"
                className="signup-input"
                required
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              {/* <label htmlFor="password" className="form-input-label">
                Password
              </label> */}
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
                name="password"
                className="signup-input"
                required
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              {/* <label htmlFor="passwordRepeat" className="form-input-label">
                Repeat Password
              </label> */}
              <br />
              <input
                type="password"
                placeholder="Repeat Password"
                id="passwordRepeat"
                name="passwordRepeat"
                className="signup-input"
                required
                onChange={handleChange}
              />
            </div>

            <div className="signup-button-container">
              <button type="submit" className="signup-submit-button">
                Sign Up
              </button>
              <button type="reset" className="cancel-button">
                Cancel
              </button>
            </div>
            <div className='onboarding-prompt'>
              <p>Don't see your unit listed? <Link to='/onboarding'>New Unit Onboarding</Link></p>
            </div>
            <div className="signup-footer">
              <p>Already signed up? </p>
              <button onClick={handleLogin} className="signup-footer-login-button">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
