import { useEffect, useRef, useState } from "react";
import PageLayout from "../components/page-layout";
import { useAuth0 } from "@auth0/auth0-react";
import Dropzone from "../components/Dropzone";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { Link } from "react-router-dom";
import Papa from "papaparse";

const HomePage = () => {
  const { user } = useAuth0();
  const ref = useRef();

  console.log(user);
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //      fetch('/AlphaRoster.csv')
  //         .then(response => response.text())
  //         .then(text => {
  //             Papa.parse(text, {
  //                 header: true,
  //                 complete: results => {
  //                     setData(results.data);
  //                 }
  //             });
  //         });
  // }, []);

  useEffect(() => {
    fetch("http://localhost:8080/units/1/roster")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // console.log(data.workcenters)

  return (
    <>
      <PageLayout>
        <h1>This is the home page.</h1>
        <div
          className="cardCnt"
          style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
        >
          {data?.alpha_roster?.map((el, indx) => {
            return (
              <Flippy
                flipOnHover={false}
                flipOnClick={true}
                flipDirection="horizontal"
                ref={ref}
                key={indx}
                style={{ width: "15vw", height: "50vh", maxWidth: "" }}
              >
                <FrontSide
                  style={{
                    backgroundColor: "#41669d",
                    borderRadius: "25px",
                    padding: "0",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="cdHdr"
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <p>{el.grade}</p>
                    <h4>{el.full_name}</h4>
                    <p>{el.doe}</p>
                  </div>
                  <h4>{el.go_by}</h4>
                  <img
                    src={el.personal_img}
                    alt={el.full_name + "profile picture"}
                    height="100px"
                  />
                  <h4>{el.duty_title}</h4>
                  <p>{el.cafsc}</p>
                  <h4>Supervisor:</h4>
                  <p>{el.supv_name}</p>
                  <img
                    src={el.achievement_imgs}
                    alt={el.full_name + "achievements"}
                    height="25px"
                  />
                </FrontSide>
                <BackSide
                  style={{ backgroundColor: "#175852", borderRadius: "25px" }}
                >
                  <h4>Favorite Movie</h4>
                  <p>{el.favorite_movie}</p>
                  <h4>Hobbies</h4>
                  <p>{el.hobbies}</p>
                  <h4>Interesting Fact</h4>
                  <p>{el.interesting_fact}</p>
                </BackSide>
              </Flippy>
            );
          })}
        </div>
        <Dropzone />
      </PageLayout>
    </>
  );
};

export default HomePage;
