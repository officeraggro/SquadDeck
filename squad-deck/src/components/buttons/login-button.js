import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/callback",
      },
    });
  };

  return (
    <>
      <div>
        <button className="login-button" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </>
  );
};

export default LoginButton;
