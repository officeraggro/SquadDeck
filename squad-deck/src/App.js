import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import PageLoader from "./components/page-loader";
import LandingPage from "./pages/landing-page";
import HomePage from "./pages/home-page";
import MissingPage from "./pages/missing-page";
import SignupPage from "./pages/signup-page";
import UserProfile from "./pages/profile-page";
import CallbackPage from "./pages/callback-page";
import AuthenticationGuard from "./components/authentication-guard";
import { SdUserContext } from "./components/sd-user-context";
import OrgChartPage from "./pages/org-chart-page";
import UnitOnboardingPage from "./pages/unit-onboarding-page";
import SearchContext from "./components/SearchContext";
import { RosterUploadContext } from "./components/roster-upload-context";
import ImageUploadTest from "./pages/image-upload-test";
import UploadPage from "./pages/upload-page";

const App = () => {
  const [sdUser, setSdUser] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [rosterUpload, setRosterUpload] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
        <SearchContext.Provider
          value={{
            data,
            setData,
            searchTerm,
            setSearchTerm,
            searchData,
            setSearchData,
          }}
        >
          <RosterUploadContext.Provider
            value={{ rosterUpload, setRosterUpload }}
          >
            <Routes>
              {/* public */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/onboarding" element={<UnitOnboardingPage />} />

              {/* private */}
              <Route path="/home" element={<HomePage />} />
              <Route
                path="/org"
                element={<AuthenticationGuard component={OrgChartPage} />}
              />
              <Route
                path="/upload"
                element={<AuthenticationGuard component={UploadPage} />}
              />
              <Route
                path="/profile"
                element={<AuthenticationGuard component={UserProfile} />}
              />
              <Route
                path="/callback"
                element={<AuthenticationGuard component={CallbackPage} />}
              />

              {/* catch-all */}
              <Route path="/*" element={<MissingPage />} />
            </Routes>
          </RosterUploadContext.Provider>
        </SearchContext.Provider>
      </SdUserContext.Provider>
    </>
  );
};

export default App;
