import { useContext, useEffect, useState } from "react";
import OnboardingFormContext from "./onboarding-form-context";

const NewUnitForm = () => {
  const [existingUnits, setExistingUnits] = useState([])
  const { 
    title, 
    page, 
    setPage, 
    unitForm, 
    setUnitForm } = useContext(OnboardingFormContext);

  const handleUnitFormChange = (e) => {
    setUnitForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleNext = () => {
    // Check if unit already exists. If so, alert user
    if (checkUnitExists()) {
      window.alert('Unit already exists')
    } else {
      // IF new unit, proceed to next page in form
      setPage((prev) => prev + 1);
    }
  }
  

  // const handleUnitSubmit = (e) => {
  //   e.preventDefault();
  // };

  const checkUnitExists = () => {
        for (let unit of existingUnits) {
          if (unit.unit_abbr === unitForm.unit_abbr) {
            return true
          }
        }
  }

  useEffect(() => {
    fetch("http://localhost:8080/units")
      .then(res => res.json())
      .then(data => setExistingUnits(data))
  })

  return (
    <div>
        <div className="form-nav-button-container">
          <button
            type="button"
            className="form-nav-button"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
        <h3>Step 1 - Enter {title[page]}</h3>
        <div className="onboarding-instructions">
          <h4>Instructions</h4>
          <p>
            Provide the requested information about your unit by filling out the
            relevant form fields. When finished, click "Next" to continue.
          </p>
        </div>
      <form>
        <div>
          {/* <label htmlFor="unit_full_name">Unit Name</label> */}
          <input
            autoFocus
            type="text"
            placeholder="Enter Unit Name"
            id="unit_full_name"
            name="unit_full_name"
            required
            className="onboarding-input"
            onChange={handleUnitFormChange}
          />
          <br />
        </div>
        <div>
          <br />
          {/* <label htmlFor="unit_abbr">Abbreviation</label> */}
          <input
            type="text"
            placeholder="Enter Unit Abberviation"
            id="unit_abbr"
            name="unit_abbr"
            required
            className="onboarding-input"
            onChange={handleUnitFormChange}
          />
          <br />
        </div>
        <div>
          <br />
          {/* <label htmlFor="unit_parent">Parent Organization</label> */}
          <input
            type="text"
            placeholder="Enter Parent Organization"
            id="unit_parent"
            name="unit_parent"
            required
            className="onboarding-input"
            onChange={handleUnitFormChange}
          />
          <br />
        </div>
        {/* <div>
          <label htmlFor="unit_emblem_url">Unit Emblem</label>
          <input
            type="text"
            placeholder="Enter Unit Emblem Url"
            id="unit_emblem_url"
            name="unit_emblem_url"
            className="onboarding-input"
            onChange={handleUnitFormChange}
          />
          <br />
        </div> */}
        <div>
          {/* <label htmlFor="unit_station">Base</label> */}
          <br />
          <input
            type="text"
            placeholder="Enter Unit Station"
            id="unit_station"
            name="unit_station"
            required
            className="onboarding-input"
            onChange={handleUnitFormChange}
          />
          <br />
        </div>
      </form>
    </div>
  );
};

export default NewUnitForm;
