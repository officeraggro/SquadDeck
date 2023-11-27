import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingFormContext from "./onboarding-form-context";

const ReviewAndSubmit = () => {
  const navigate = useNavigate();
  const { title, page, setPage, unitForm, setUnitForm, shopForm, setShopForm } =
    useContext(OnboardingFormContext);

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleAbort = (e) => {
    setUnitForm({
      unit_full_name: "",
      unit_abbr: "",
      unit_parent: "",
      unit_emblem_url: "",
      unit_station: "",
    });

    setShopForm([]);
    setPage(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const createNewUnit = async () => {
      const response = await fetch("http://localhost:8080/units", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(unitForm),
      });
      if (response.ok) {
        const createNewWorkCenters = async () => {
          const response = await fetch("http://localhost:8080/workcenters", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(shopForm),
          });
          if (response.ok) {
            setUnitForm({
              unit_full_name: "",
              unit_abbr: "",
              unit_parent: "",
              unit_emblem_url: "",
              unit_station: "",
            });

            setShopForm([]);
            navigate('/')
          }
        }
        createNewWorkCenters()
      }
    }
    createNewUnit()
  };

  return (
    <>
        <div className="form-nav-button-container-last">
          <button
            type="button"
            className="form-nav-button"
            onClick={handlePrev}
          >
            Prev
          </button>
        </div>
        <h3>Step 4 - {title[page]}</h3>
        <div className="onboarding-instructions">
          <h4>Instructions</h4>
          <p>Review the information below. Once finished, click 'Submit' </p>
        </div>

      <div className="onboarding-review">
        <h3>Unit Information</h3>
        <p>Unit Name: {unitForm.unit_full_name}</p>
        <p>Unit Abbreviation: {unitForm.unit_abbr}</p>
        <p>Unit Parent Organization: {unitForm.unit_parent}</p>
        <p>Base: {unitForm.unit_station}</p>
        <hr />
        <h3>Workcenters</h3>
        <ol>
          {shopForm.map((elem, indx) => {
            return (
              <li key={indx * 7}>
                Name: {elem.workcenter_name}, Abbr: {elem.workcenter_abbr},
                Parent: {elem.workcenter_parent}
              </li>
            );
          })}
        </ol>
      </div>
      <div className='onboarding-submit-button-container'>
        <button 
          type="submit"
          className='onboarding-submit-button' 
          onClick={handleSubmit}>
          Submit
        </button>
        <button 
          type="button"
          className='onboarding-cancel-button' 
          onClick={handleAbort}>
          Start Over
        </button>
      </div>
    </>
  );
};

export default ReviewAndSubmit;
