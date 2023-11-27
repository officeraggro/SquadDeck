import { useState, useEffect, useRef, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { OnboardingFormProvider } from "../components/unitOnboarding/onboarding-form-context";
import UnitOnboardingForm from "../components/unitOnboarding/unit-onboarding-form";
import '../Styled/onboarding-page.css'

const UnitOnboardingPage = () => {
  const [units, setUnits] = useState();

  useEffect(() => {
    const fetchUnits = async () => {
      const response = await fetch("http://localhost:8080/units");
      const data = await response.json();
      setUnits(data);
    };
    fetchUnits();
  }, []);

  return (
    <>
      <div className='onboarding-main'>
        <div className='onboarding-grid-container'>
          <header className='onboarding-header'>
            <h1>New Unit Onboarding</h1>
          </header>
          <OnboardingFormProvider>
              <UnitOnboardingForm units={units} />
          </OnboardingFormProvider>
        </div>
      </div>
    </>
  );
};

export default UnitOnboardingPage;
