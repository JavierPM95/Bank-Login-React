import React, { useState } from "react";
import { auth } from "../Firebase.js";
import './mainContent.css'

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
      <div className="bg-light">
      <div className="container">
        {userState != null ? (
          <div>
            <h1 className="pt-4 pb-2 text-center">
              Hello,{" "}
              {userState.displayName ? userState.displayName : userState.email}.
            </h1>
            <h4 className="pb-4 text-center">Great to see you again!</h4>
          </div>
        ) : (
          <h3 className="py-4 text-center">
            Hi there :) Did you see the pop-up?{" "}
          </h3>
        )}
      </div>
      </div>
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
          <img id="paymentOnline" src="/images/paymentOnline.png" alt="payment-svg"/>
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
