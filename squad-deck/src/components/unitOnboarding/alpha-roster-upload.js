import { useContext } from "react";
import OnboardingFormContext from "./onboarding-form-context";
import Dropzone from '../Dropzone'

const AlphaRosterUpload = () => {
    const {
        page,
        setPage,
        title
    } = useContext(OnboardingFormContext)

    const handlePrev = () => setPage((prev) => prev - 1);

    const handleNext = () => setPage((prev) => prev + 1);

    return (
      <>
        <header className='onboarding-header'>
          <div className="form-nav-button-container">
            <button
              type="button"
              className="form-nav-button"
              onClick={handlePrev}
            >
              Prev
            </button>
            <button
              type="button"
              className="form-nav-button"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
          <h3>Step 3 - {title[page]}</h3>
          <div className="onboarding-instructions">
            <h4>Instructions</h4>
            <p>
              Upload an alpha roster to Squad Deck by dragging and dropping the
              file onto the field below or clicking on the field and selecting the
              file to upload.
            </p>
            <p>
              <strong>Note:</strong> only CSV (*.csv) files are supported.
            </p>
          </div>
          <div className="form-nav-button-container">
          </div>
        </header>
        <Dropzone />
      </>
    );
}

export default AlphaRosterUpload