import LoginButton from "../buttons/login-button";
import LogoutButton from "../buttons/logout-button";
import { useAuth0 } from "@auth0/auth0-react";
import SignupButton from "../buttons/signup-button";
import "../../Styled/nav-bar.css";
import HamburgerMenu from "../buttons/HamburgerMenu";
import { Link } from "react-router-dom"
import LogoScript from "../../Images/LogoScript.png"
import SearchContext from "../SearchContext";
import { useContext } from "react";

const NavBar = () => {
	const { user, isAuthenticated } = useAuth0();
	const { setSearchData } = useContext(SearchContext)

	const handleClick = () => {
		setSearchData([])
	}

	return (
		<>
			<div className="top-nav-bar">
				<div className="top-nav-left">
					{isAuthenticated && <HamburgerMenu />}
				</div>
				<div className="top-nav-middle">
					<Link to="/home"><img src={LogoScript} className="title" onClick={handleClick}/></Link>
				</div>
				<div className="top-nav-right">
					{/* {!isAuthenticated && (
						<>
							<LoginButton />
							<SignupButton />
						</>
					)} */}
					{isAuthenticated && (
						<>
							<img
								src={user.picture}
								alt={user.picture + "picture"}
								height="35px"
								className="user-picture"
							/>
						</>
					)}
				</div>
			</div>
			<div className="top-nav-buffer" />
		</>
	);
};

export default NavBar;
