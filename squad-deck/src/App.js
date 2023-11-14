import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import HomePage from "./pages/home-page";
import MissingPage from "./pages/missing-page";

const App = () => {
  return (
    <>
      {/* <h1>This is the Squad Deck app! Great job! Cats!</h1> */}
      <Routes>
        {/* public */}
        <Route path="/" element={<LandingPage />} />

        {/* private */}
        <Route path="/home" element={<HomePage />} />

        {/* catch-all */}
        <Route path="/*" element={<MissingPage />} />
      </Routes>
    </>
  );
};

export default App;
