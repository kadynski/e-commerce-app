import React from "react";
import img1 from "../img/Ocean.jpeg";
import img2 from "../img/cleaner-ocean.jpeg";
import Popular from "../components/Popular";

const Main =()=>{
    return (<div>
    <div className="container">
        <div className="row">
            <div className="col-md img-div">
                <img src={img1} alt="ocean" className="img-fluid mp-img" />
            </div>
            <div className="col-md text-center text-div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
        </div>
        <div className="row">
            <div className="col-md text-center text-div">
        Quisque pellentesque orci vitae dignissim pharetra.
            </div>
            <div className="col-md img-div">
                  <img src={img2} alt="ocean" className="img-fluid mp-img"/>
            </div>
        </div>
    </div>
     <Popular />
    </div> )
};

export default Main;