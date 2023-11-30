import { useEffect } from "react";
import NavBar from "../components/navigation/nav-bar";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from  '@auth0/auth0-react'


const CallbackPage = () => {
  const { isAuthenticated } = useAuth0
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home')

  }, [isAuthenticated])

  return (
    <>
      <div className="page-layout">
        <NavBar />
        <div className="page-layout__content" />
      </div>
    </>
  );
};

export default CallbackPage;
