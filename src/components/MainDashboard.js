import React from "react";
import PreviewMoney from "./PreviewMoney";
import TableTransaction from "./TableTransaction";
import './images/Wave.svg';
import './mainContent.css'
import mainWave from './images/Wave.svg'

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
        <img src={mainWave} alt="wave"/>
      </div>
    </>
  );
};

export default MainDashboard;
