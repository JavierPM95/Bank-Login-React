import React from 'react';
import NavBar from './components/Navbar';
import MainContentSignIn from './components/mainContentSignIn'

function App() {
  return (
    <div className="App">
      <div>
      <NavBar/>
      </div>
      <div>
      <MainContentSignIn/>
      </div>
    </div>
  );
}

export default App;
