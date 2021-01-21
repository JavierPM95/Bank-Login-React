import React, { useState } from "react";
import NavBar from "./components/Navbar";
import MainContentSignIn from "./components/MainContentSignIn";
import MainDashboard from "./components/MainDashboard.js";
import { auth } from "./Firebase.js";
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [userState, setUserState] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUserState(user);
    } else {
      setUserState(null);
    }
  });

  return (
      <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <div>
          <div>
            {userState != null ? (
              <div>
                <div className="bg-light">
                  <h4 className="pt-3 pb-1 text-center">
                    Hello,{" "}
                    {userState.displayName
                      ? userState.displayName
                      : userState.email}
                    .<span role="img" aria-label="wink">😉</span>
                  </h4>
                  <h6 className="pb-3 text-center">Great to see you again!</h6>
                </div>
                <div>
                    <MainDashboard />
                </div>
              </div>
            ) : (
              <div>
                <div className="bg-light">
                  <h4 className="py-3 text-center">
                    Hi there :) What do you want to do today?{" "}
                  </h4>
                </div>
                <div>
                    <MainContentSignIn/>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
