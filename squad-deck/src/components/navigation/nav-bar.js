import LoginButton from "../buttons/login-button";
import LogoutButton from "../buttons/logout-button";
import { useAuth0 } from "@auth0/auth0-react";
import SignupButton from "../buttons/signup-button";
import HamburgerMenu from "../buttons/HamburgerMenu";



const NavBar = () => {
  const { user, isAuthenticated } = useAuth0();



  return (
    <>
      <div className="top-nav-bar">
        <div className="top-nav-left">
          <HamburgerMenu />
          <h1 className="title">SquadDeck</h1>
        </div>
        <div className="top-nav-right">
          {!isAuthenticated && (
            <>
              <LoginButton />
              <SignupButton />
            </>
          )}
          {isAuthenticated && (
            <>
              <img
                src={user.picture}
                alt={user.picture + "picture"}
                height="35px"
                className="user-picture"
              />
              <LogoutButton />
            </>
          )}
        </div>
      </div>
      <div className="top-nav-buffer" />
    </>
  );
};

export default NavBar;
