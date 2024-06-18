import React, { useContext, useState } from "react";
import { Button, Heading } from "@chakra-ui/react";
import UserDataCollect from "../Components/UserDataCollect/UserDataCollect";
import "./BuilderArea.css";
import { IoIosRefresh } from "react-icons/io";
import Footer from "../Components/Footer/Footer";
import ResumeContext from "../Context/ResumeContext";
import PropagateLoader from "react-spinners/PropagateLoader";

const BuilderArea = (props) => {
  const { showComponent, setShowComponent, loading, handlePrint } =
    useContext(ResumeContext);

  const handleSelectNewTemplate = () => {
    setShowComponent(!showComponent);
  };
  const [is_loading, setis_loading] = useState(false);
  const showLoading = () => {
    setis_loading(!is_loading);
    console.log("true");
    setTimeout(() => {
      setis_loading(false);
      console.log("false");
    }, 3500);
  };

  return (
    <>
      {loading && <PropagateLoader id="spinner" color="#319795" size={30} />}

      <div
        id="main-box"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {/* <div className=""> */}
        <UserDataCollect />
        {/* </div> */}
        <div className="">
          <div className="d-flex flex-wrap justify-content-center">
            <Button
              className="mx-2 my-5"
              colorScheme={"teal"}
              variant={"outline"}
              onClick={() => showLoading()}
            >
              <i className="material-icons p-1">
                <IoIosRefresh size={25} />
              </i>
              Refresh
            </Button>
          </div>
          {is_loading ? (
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "40px",
                marginBottom: "55%",
              }}
            >
              <iframe
                title="Loading"
                src="https://embed.lottiefiles.com/animation/97930"
                style={{
                  height: "40vh",
                  //   marginBottom: "50vh",
                  //   padding: "30px",
                }}
              ></iframe>
              <Heading as="h2" size="lg" className="p-4 text-center">
                Loading ...
              </Heading>
            </div>
          ) : (
            <div id="theme-box-border">{props.theme}</div>
          )}
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <Button
          className="mx-2 my-5"
          colorScheme={"teal"}
          variant={"outline"}
          onClick={handlePrint}
        >
          Print
        </Button>
        <Button
          className="mx-2 my-5"
          colorScheme={"teal"}
          variant={"outline"}
          onClick={handleSelectNewTemplate}
        >
          Select Another Template
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default BuilderArea;
