import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: 'http://localhost:3001/',
      },
    });
  };

  return (
    <>
      <div>
        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </>
  );
};

export default LogoutButton;
