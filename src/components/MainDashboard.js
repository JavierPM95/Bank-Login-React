import React from "react";
import PreviewMoney from "./PreviewMoney";
import TableTransaction from "./TableTransaction";

const MainDashboard = () => {
  return (
    <>
      <PreviewMoney />
      <div className="container">
        <div className="col-md-6 my-3">
          <TableTransaction />
        </div>
        <div className="col-md-6 my-3"></div>
      </div>
      <div>
      <img id="mainWaves" src="/images/Wave.svg" alt="waves"/>
      </div>
    </>
  );
};

export default MainDashboard;
