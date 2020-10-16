import React, {useState} from "react";
import {auth, fs, user} from '../Firebase.js'

const MainContentSignIn = (props) => {
  
const [userState, setUserState] = useState(null)

    auth.onAuthStateChanged(user => {
        if (user) {
            setUserState(user)
        } else {
            setUserState(null)
        }
    })
  
    return (
    <div className="bg-light">
      <div className="container">
        {
            userState != null ? <h1 className="text-center">Hello, you are in your account</h1> : <h1 className="text-center" >you are sign out</h1>
        }
      </div>
    </div>
  );
};

export default MainContentSignIn;
