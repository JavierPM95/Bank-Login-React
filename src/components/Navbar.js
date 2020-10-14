import React, {useState} from "react";
import { Modal, Button } from 'react-bootstrap';

const NavBar = () => {

const [showModal, setShowModal] = useState(false);

const handleShowModal = () => {
    setShowModal(!showModal)
}

  return (
   
   //NavBar
   <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={()=> handleShowModal()}
                >
                  Sing up
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.youtube.com/watch?v=p7z8drsFJeU&ab_channel=TenpersUniverse"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.youtube.com/watch?v=p7z8drsFJeU&ab_channel=TenpersUniverse"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      <Modal show={showModal}>
        <Modal.Header closeButton onClick={() => handleShowModal()}>
          <Modal.Title>
              Dania was here!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id="signUpForm">
                <div className="form-group">
                    <label htmlFor="emailFormSign">Enter your email</label>
                    <input id="emailFormSign" type="email" className="form-control" placeholder="example@email.com" />
                    <small id="emailFormSign" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="passwordFormSign">Password</label>
                    <input type="password" className="form-control" id="passwordFormSign" placeholder="Password"/>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleShowModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleShowModal()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default NavBar;
