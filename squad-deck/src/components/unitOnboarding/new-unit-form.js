import { useContext, useEffect } from "react";
import OnboardingFormContext from "./onboarding-form-context";

const NewUnitForm = () => {
  const { 
    title, 
    page, 
    setPage, 
    unitForm, 
    setUnitForm 
  } = useContext(OnboardingFormContext);

  const handleUnitFormChange = (e) => {
    setUnitForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // const handleNumChange = (e) => {
  //   setNumShops(e.target.value)
  // };

  const handleNext = () => setPage((prev) => prev + 1);

  const handleUnitSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <header>
        <h3>Step 1 - Enter {title[page]}</h3>
        <h4>Instructions</h4>
        <p>Provide the requested information about your unit by filling out the relevant form fields. When finished, click "Next" to continue.</p>
        <div className="form-nav-button-container">
          <button
            type="button"
            className="form-nav-button"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </header>

      <form onSubmit={handleUnitSubmit}>
        <div>
          <label htmlFor="unit_full_name">Unit Name</label>
          <input
            autoFocus
            type="text"
            placeholder="Enter Unit Name"
            id="unit_full_name"
            name="unit_full_name"
            required
            onChange={handleUnitFormChange}
          />
          <br />
        </div>
        <div>
          <label htmlFor="unit_abbr">Abbreviation</label>
          <input
            type="text"
            placeholder="Enter Unit Abberviation"
            id="unit_abbr"
            name="unit_abbr"
            required
            onChange={handleUnitFormChange}
          />
          <br />
        </div>
        <div>
          <label htmlFor="unit_parent">Parent Organization</label>
          <input
            type="text"
            placeholder="Enter Parent Organization"
            id="unit_parent"
            name="unit_parent"
            required
            onChange={handleUnitFormChange}
          />
          <br />
        </div>
        <div>
          <label htmlFor="unit_emblem_url">Unit Emblem</label>
          <input
            type="text"
            placeholder="Enter Unit Emblem Url"
            id="unit_emblem_url"
            name="unit_emblem_url"
            onChange={handleUnitFormChange}
          />
          <br />
        </div>
        <div>
          <label htmlFor="unit_station">Base</label>
          <input
            type="text"
            placeholder="Enter Unit Station"
            id="unit_station"
            name="unit_station"
            required
            onChange={handleUnitFormChange}
          />
          <br />
        </div>
        {/* <div>
          <label htmlFor="workcenter_number">Number of Workcenters</label>
          <input
            type="number"
            id="workcenter_number"
            name="workcenter_number"
            required
            onChange={handleNumChange}
          />
          <br />
        </div> */}
        {/* <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        <button type="reset">Cancel</button> */}
      </form>
    </div>
  );
};

export default NewUnitForm;
