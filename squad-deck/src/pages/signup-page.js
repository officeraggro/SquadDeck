import { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

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

  //   const isMounted = useRef(false);
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     if (isMounted.current) {
  //       fetch("http://localhost:8080/installations")
  //         .then((res) => res.json())
  //         .then((data) => setInstallations(data));
  //     } else {
  //       isMounted.current = true;
  //     }
  //   }, []);

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
      console.log(data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            id="name"
            name="name"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="unit">Unit</label>
          <select
            className="unitsDropDown"
            onChange={handleChange}
            id="unit"
            name="unit"
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
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            id="username"
            name="username"
            required
            onChange={handleChange}
          />
          <br />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            id="email"
            name="email"
            required
            onChange={handleChange}
          />
          <br />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            name="password"
            required
            onChange={handleChange}
          />
          <br />
        </div>
        <div>
          <label htmlFor="passwordRepeat">Repeat Password</label>
          <input
            type="password"
            placeholder="Repeat Password"
            id="passwordRepeat"
            name="passwordRepeat"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">Sign Up</button>
          <button type="reset">Cancel</button>
        </div>
        <div>
          <span>Already signed up? </span>
          <button onClick={handleLogin}>Log In</button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
