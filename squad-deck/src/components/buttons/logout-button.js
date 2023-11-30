import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { SdUserContext } from "../sd-user-context";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { setSdUser } = useContext(SdUserContext)

  const handleLogout = () => {
    setSdUser([])
    localStorage.clear()
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
