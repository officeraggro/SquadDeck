import { useContext, useState, useEffect } from "react";
import OnboardingFormContext from "./onboarding-form-context";

const NewWorkCentersForm = ({ units }) => {
  const { 
    title, 
    page,
    setPage,
    unitForm, 
    shopForm, 
    setShopForm 
  } = useContext(OnboardingFormContext);
  
  const [workCenter, setWorkCenter] = useState({
    workcenter_name: "",
    workcenter_parent: "",
    workcenter_abbr: "",
    workcenter_emblem_url: "",
    workcenter_unit_id: units.length + 1
  })

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((prev) => prev + 1);

  const handleShopSubmit = (e) => {
    e.preventDefault();
  };

  const addWorkCenter = (e) => {
    setShopForm(prev => [...prev, workCenter])
  }

  const handleWorkCenterFormChange = (e) => {
    setWorkCenter((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div>
      <header>
        <h3>Step 2 - Enter {title[page]}</h3>
        <h4>Instructions</h4>
        <p>Use the form below to enter information about <strong>{unitForm.unit_abbr}</strong> workcenters</p>
        <p>Add each work center by filling out the relevant fields. When finished with a workstation, click "Add Work Center" to submit.</p>
        <p>When you are finished adding workcenters, click the "Next" button.</p>
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
      </header>

      {shopForm.length
        && (
          <>
            <div>
              <h5>{units.unit_abbr} workcenters added:</h5>
              <ul>
                {shopForm.map((elem, indx) => {
                  return <li key={indx * 9}>NAME: {elem.workcenter_name} ABBR: {elem.workcenter_abbr} PARENT: {elem.workcenter_parent}</li>
                })}
              </ul>
            </div>
          </>
        )
      }

      <form onSubmit={(e) => handleShopSubmit}>
        <div>
          <label htmlFor="workcenter_name">Workcenter Name</label>
          <input
            autoFocus
            type="text"
            placeholder="Enter Work Center Name"
            id="workcenter_name"
            name="workcenter_name"
            required
            onChange={handleWorkCenterFormChange}
          />
          <br />
        </div>
        <div>
          <label htmlFor="workcenter_parent">Workcenter Parent</label>
          <input
            type="text"
            placeholder="Enter Workcenter Parent"
            id="workcenter_parent"
            name="workcenter_parent"
            required
            onChange={handleWorkCenterFormChange}
          />
          <br />
        </div>
        <div>
          <label htmlFor="workcenter_abbr">Workcenter Abbreviation</label>
          <input
            type="text"
            placeholder="Enter Workcenter Abbreviation"
            id="workcenter_abbr"
            name="workcenter_abbr"
            required
            onChange={handleWorkCenterFormChange}
          />
          <br />
        </div>
        <div>
          <label htmlFor="workcenter_emblem_url">Workcenter Logo</label>
          <input
            type="text"
            placeholder="Enter Workcenter Logo Url"
            id="workcenter_emblem_url"
            name="workcenter_emblem_url"
            onChange={handleWorkCenterFormChange}
          />
          <br />
        </div>
        <div>
          <button type="reset" onClick={addWorkCenter}>
            Add Work Center
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewWorkCentersForm;
