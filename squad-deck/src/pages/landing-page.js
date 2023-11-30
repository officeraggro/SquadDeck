import LoginButton from "../components/buttons/login-button";
import SignupButton from "../components/buttons/signup-button";
import PageLayout from "../components/page-layout";
import "../Styled/landing-page.css";

const LandingPage = () => {
  return (
    <>
      <div className="landing">
        <div className="hero-img">
          <div className="hero-text">
            <h1>SquadDeck</h1>
            <div className="lp-buttons-container">
              <LoginButton />
              <SignupButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
