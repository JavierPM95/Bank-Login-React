import React, { useState } from "react";
import { auth } from "../Firebase.js";
import './mainContent.css'
import paymentSvg from './images/paymentOnline.png';

const MainContentSignIn = () => {
  const [userState, setUserState] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUserState(user);
    } else {
      setUserState(null);
    }
  });

  return (
    <div>
      <div className="container mainContent">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="text-primary py-4">All what you need it, in one place. <span role="img" aria-label="cool">😎</span></h1>
          <p className="py-4">The smart way to manage your money, everywhere, everytime.</p>
          <div className="d-flex justify-content-right">
          <button className="btn btn-primary d-inline btn-lg mx-2" > Let's start</button>
          <button className="btn btn-secondary d-inline btn-lg mx-2" > Know more</button>
          </div>
        </div>
        <div className="col-md-6">
          <img id="paymentOnline" src={paymentSvg} alt="payment-svg"/>
        </div>
      </div>
      </div>
      <div>
        <img id="mainWaves"  src="/images/wave.svg" alt="waves"/>
      </div>
    </div>
  );
};

export default MainContentSignIn;
