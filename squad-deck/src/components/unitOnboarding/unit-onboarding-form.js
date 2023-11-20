import { useContext } from "react"
import NewUnitForm from "./new-unit-form"
import NewWorkCentersForm from "./new-workcenters-form"
import AlphaRosterUpload from "./alpha-roster-upload"
import ReviewAndSubmit from "./review-submit"
import OnboardingFormContext from "./onboarding-form-context"


const UnitOnboardingForm = ({ units }) => {
    const { page } = useContext(OnboardingFormContext)
    const display = {
        0: <NewUnitForm />,
        1: <NewWorkCentersForm units={ units } />,
        2: <AlphaRosterUpload />,
        3: <ReviewAndSubmit />
    }
    
    return (
        <div>
            {display[page]}
        </div>
    )
}

export default UnitOnboardingForm