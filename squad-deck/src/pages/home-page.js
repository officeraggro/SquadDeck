import { useEffect, useRef, useState } from 'react';
import PageLayout from "../components/page-layout";
import { useAuth0 } from "@auth0/auth0-react";
import Dropzone from "../components/Dropzone";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { Link } from "react-router-dom";
import Papa from 'papaparse';

const HomePage = () => {

  const { user } = useAuth0();
  const ref = useRef();

//   console.log(user);
  const [data, setData] = useState([]);

  useEffect(() => {
     fetch('/AlphaRoster.csv')
        .then(response => response.text())
        .then(text => {
            Papa.parse(text, {
                header: true,
                complete: results => {
                    setData(results.data);
                }
            });
        });
}, []);



  return (
    <>
      <PageLayout>
        <h1>This is the home page.</h1>
        <div className='cardCnt' style={{display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {data.map((el) => {
            return (
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
          ref={ref}
          style={{ width: "15vw", height: "35vh", maxWidth: ""}}>
          <FrontSide style={{ backgroundColor: "#41669d", borderRadius: "25px", padding:'0', margin: "0 auto", textAlign: "center"}}>
          <div className='cdHdr' style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          <p>{el.GRADE}</p>
          <h4>{el.FULL_NAME}</h4>
          <p>{el.DOE}</p>
          </div>
          <img src="" alt='Profile Picture' />
          <h4>{el.DUTY_TITLE}</h4>
          <p>{el.CAFSC}</p>
          <h4>Supervisor:</h4>
          <p>{el.SUPV_NAME}</p>
          <img src="" alt="Achievment images" />
          </FrontSide>
          <BackSide style={{ backgroundColor: "#175852", borderRadius: "25px" }}>

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
