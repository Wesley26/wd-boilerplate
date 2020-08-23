import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Main">
        <h1>Hello World! This is demo text title.</h1>
        <div className ="ContentWrapper">
          <div className="NavWrapper">
            <h3>
              This is Nav bar.
            </h3>
          </div>
          <div className="ContentA">
              <h3>
                This is demo text paragraph. Here, this paragraph of information describes your subject
                in greater detail.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
