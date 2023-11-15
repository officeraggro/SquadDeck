import React from "react";
import { useNavigate } from 'react-router-dom'

const SignupButton = () => {
  const navigate = useNavigate()


  return (
    <>
      <div>
        <button className="signup-button" onClick={e => navigate('/signup')}>
          Register
        </button>
      </div>
    </>
  );
};

export default SignupButton;
