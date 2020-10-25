import React from "react";
import PreviewMoney from "./PreviewMoney";
import TableTransaction from "./TableTransaction";
import './images/Wave.svg';
import './mainContent.css'

const MainDashboard = () => {
  return (
    <>
      <PreviewMoney />
      <div className="container">
        <div className="col-md-6 my-3">
          <TableTransaction />
        </div>
        <div className="col-md-6 my-3">
        </div>
      </div>
      <div>
      <svg id="mainWaves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f0f0f0" fill-opacity="1" d="M0,288L48,293.3C96,299,192,309,288,261.3C384,213,480,107,576,85.3C672,64,768,128,864,144C960,160,1056,128,1152,101.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
      </div>
    </>
  );
};

export default MainDashboard;
