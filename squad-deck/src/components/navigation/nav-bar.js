import LoginButton from "../buttons/login-button"
import LogoutButton from "../buttons/logout-button"
import { useAuth0 } from '@auth0/auth0-react'
import SignupButton from "../buttons/signup-button"


const NavBar = () => {
    const { isAuthenticated } = useAuth0()

    return (
      <>
        <div className="top-nav-bar">
          <h1>SquadDeck</h1>
          {!isAuthenticated && (
            <>
              <LoginButton />
              <SignupButton />
            </>
          )}
          {isAuthenticated && (
            <>
                <LogoutButton />
            </>
          )}
        </div>
      </>
    );
}

export default NavBar