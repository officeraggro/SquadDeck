import { useEffect, useRef, useState } from 'react';
import PageLayout from "../components/page-layout";
import { useAuth0 } from "@auth0/auth0-react";
import Dropzone from "../components/Dropzone";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "../Styled/home-page.css"
import { Link } from "react-router-dom";
import Papa from 'papaparse';

const HomePage = () => {

  const { user } = useAuth0();
  const ref = useRef();

//   console.log(user);
  const [data, setData] = useState([]);

  useEffect(() => {
     fetch('http://localhost:8080/roster')
        .then(response => response.json())
        .then(data => {
                    setData(data);
                })
}, []);

console.log(data)

  return (
    <>
      <PageLayout>
        <div className='cardCnt'>
        {data.map((el) => {
            return (
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
          ref={ref}
          className="FlippyCard">
          <FrontSide className="FrontSide">
          <div className='cdHdr'>
          <p>{el.grade}</p>
          <h4>{el.full_name}</h4>
          <p>In the past</p>
          </div>
          <img src="" alt='Profile Picture' />
          <h4>{el.duty_title}</h4>
          <p>{el.dafsc}</p>
          <h4>Supervisor:</h4>
          <p>MSgt Supervisor</p>
          <img src="" alt="Achievment images" />
          </FrontSide>
          <BackSide className="BackSide">

          </BackSide>
              </Flippy>
)})}
    </div> 
        <Dropzone />
      </PageLayout>
    </>
  );
};

export default HomePage;
