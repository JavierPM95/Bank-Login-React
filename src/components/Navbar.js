import React, {useState} from "react";
import { Modal, Button } from 'react-bootstrap';
import {auth} from '../Firebase.js'

//third imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  
  var isvSignUp = {
    emailSignUp: '',
    passwordSignUp: ''
  }

const [showModal, setShowModal] = useState(false);
const [signUpValues, setSignUpValues] = useState(isvSignUp);
const [newUser, setNewUser] = useState(false)


//Modal Show/Hide
const handleShowModal = () => {
  setNewUser(false);
  setShowModal(!showModal);
  setSignUpValues(isvSignUp);
}

const handleShowModalNew = () => {
  setNewUser(true);
  setShowModal(!showModal);
  setSignUpValues(isvSignUp);
}

//Sign Up input values capture
const handleInputSignUp = (e) => {
  setSignUpValues({
    ...signUpValues,
    [e.target.name]: e.target.value
  })
}


//Auth Firebase
const signUpAuth = () => {
  auth.createUserWithEmailAndPassword(signUpValues.emailSignUp, signUpValues.passwordSignUp)
    .then(userCredential => {
      setSignUpValues(isvSignUp);
      handleShowModal();
    })
  }

const signInAuth = () => {
  auth.signInWithEmailAndPassword(signUpValues.emailSignUp, signUpValues.passwordSignUp)
    .then(userCredential => {
      setSignUpValues(isvSignUp);
      handleShowModal();
    })
  }

const signOut = () => {
  auth.signOut()
    .then()
    }


  return (
   
   //NavBar
   <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a
            className="navbar-brand"
            href="https://www.youtube.com/watch?v=p7z8drsFJeU&ab_channel=TenpersUniverse"
          >
            <span role="img" aria-label="city">
              🌃
            </span>{" "}
            Online Bank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#"
                  onClick={()=> handleShowModalNew()}
                >
                  Sing up <FontAwesomeIcon icon={faUserPlus} />
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#"
                  onClick={()=> handleShowModal()}
                >
                  Log In <FontAwesomeIcon icon={faSignInAlt} />
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => signOut()}
                >
                  Logout <FontAwesomeIcon icon={faSignOutAlt} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      <Modal show={showModal}>
        <Modal.Header className="bg-primary text-light" closeButton onClick={() => handleShowModal()}>
          <Modal.Title>
              {
              newUser ?
                <h3>Create your new User <FontAwesomeIcon icon={faUserPlus} /></h3>
                :
                <h3>Log In <FontAwesomeIcon icon={faSignInAlt} /> </h3>
              }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id="signUpForm">
                <div className="form-group">
                    <label htmlFor="emailFormSign">Enter your email</label>
                    <input id="emailFormSign" name="emailSignUp" type="email" className="form-control" placeholder="example@email.com" onChange={handleInputSignUp} required />
                    <small id="emailFormSign" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordFormSign">Password</label>
                    <input type="password" name="passwordSignUp" className="form-control" id="passwordFormSign" placeholder="Password" onChange={handleInputSignUp} required/>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleShowModal()}>
            Close
          </Button>
          {
            newUser ?
              <Button variant="primary" onClick={() => signUpAuth()}>
              Create New User <FontAwesomeIcon icon={faUserPlus} />
              </Button>
            :
            <Button variant="primary" onClick={() => signInAuth()}>
            Log In <FontAwesomeIcon icon={faSignInAlt} />
          </Button>
          }
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NavBar;
