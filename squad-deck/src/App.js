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
import ImageUploadTest from "./pages/image-upload-test";

const App = () => {
	const [sdUser, setSdUser] = useState({});
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
				<Routes>
					{/* public */}
					<Route path="/" element={<LandingPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/onboarding" element={<UnitOnboardingPage />} />
					<Route path="/img-upload" element={<ImageUploadTest />} />

					{/* private */}
					<Route path="/home" element={<HomePage />} />
					<Route path="/org" element={<OrgChartPage />} />

					{/* catch-all */}
					<Route path="/callback" element={<CallbackPage />} />
					<Route path="/*" element={<MissingPage />} />
				</Routes>
			</SdUserContext.Provider>
		</>
	);
};

export default App;
