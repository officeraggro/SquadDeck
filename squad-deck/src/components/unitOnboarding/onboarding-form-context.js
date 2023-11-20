import { createContext, useState } from "react";

const OnboardingFormContext = createContext({});

export const OnboardingFormProvider = ({ children }) => {
  const title = {
    0: "Unit Information",
    1: "Workcenter Information",
    2: "Alpha Roster Upload",
    3: "Review and Submit"
  };

  const [page, setPage] = useState(0);

  const [unitForm, setUnitForm] = useState({
    unit_full_name: "",
    unit_abbr: "",
    unit_parent: "",
    unit_emblem_url: "",
    unit_station: "",
  });

  const [shopForm, setShopForm] = useState([]);

  return (
    <OnboardingFormContext.Provider
      value={{
        title,
        page,
        setPage,
        unitForm,
        setUnitForm,
        shopForm,
        setShopForm,
      }}
    >
      {children}
    </OnboardingFormContext.Provider>
  );
};

export default OnboardingFormContext
