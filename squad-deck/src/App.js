import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import PageLoader from "./components/page-loader";
import LandingPage from "./pages/landing-page";
import HomePage from "./pages/home-page";
import MissingPage from "./pages/missing-page";
import SignupPage from "./pages/signup-page";
import CallbackPage from "./pages/callback-page";
import AuthenticationGuard from "./components/authentication-guard";
import { SdUserContext } from "./components/sd-user-context";
import OrgChartPage from "./pages/org-chart-page";
import UnitOnboardingPage from "./pages/unit-onboarding-page";
import SearchContext from "./components/SearchContext";
import ImageUploadTest from "./pages/image-upload-test";
import UploadPage from "./pages/upload-page";

const App = () => {
  const [sdUser, setSdUser] = useState({});
  const [searchData, setSearchData] = useState([])
  const [data, setData] = useState([]);
  const { isLoading } = useAuth0();





  if (isLoading) {
    return (
      <div>
        <PageLoader size="100px" />
      </div>
    );
  }


  return (
    <>
      <SdUserContext.Provider value={{ sdUser, setSdUser }}>
        <SearchContext.Provider value={{ data, setData, searchData, setSearchData }}>
          <Routes>
            {/* public */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/onboarding" element={<UnitOnboardingPage />} />
            <Route path="/img-upload" element={<ImageUploadTest />} />

					{/* private */}
					<Route path="/home" element={<HomePage />} />
					<Route path="/org" element={<AuthenticationGuard component={OrgChartPage} />} />
					<Route path="/upload" element={<AuthenticationGuard component={UploadPage} />}/>

            {/* catch-all */}
            <Route path="/callback" element={<CallbackPage />} />
            <Route path="/*" element={<MissingPage />} />
          </Routes>
        </SearchContext.Provider>
      </SdUserContext.Provider>
    </>
  );
};

export default App;
