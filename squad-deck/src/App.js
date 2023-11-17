import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import HomePage from "./pages/home-page";
import MissingPage from "./pages/missing-page";
import SignupPage from "./pages/signup-page";
import CallbackPage from "./pages/callback-page";
import AuthenticationGuard from './components/authentication-guard';
import { SdUserContext } from './components/sd-user-context';

const App = () => {
  const [sdUser, setSdUser] = useState({})

  return (
    <>
    <SdUserContext.Provider value={{ sdUser, setSdUser }}>

      <Routes>

        {/* public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* private */}
        <Route path="/home" element={<HomePage />} />

        {/* catch-all */}
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="/*" element={<MissingPage />} />

      </Routes>

    </SdUserContext.Provider>
    </>
  );
};

export default App;
