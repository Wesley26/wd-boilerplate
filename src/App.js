import React from 'react';
import './tailwind.css';
import Footer from './componenets/Footer';
import Header from './componenets/Header';
import HeaderText from './componenets/HeaderText';

function App() {
  return (
    <div>

      <main className="html">
        <div className="text-center">
          <Header />
          <HeaderText name="The New You!"/>
        </div>
        <div className="text-left p-6">
          <div>
              <h3>
                This is demo text paragraph. Here, this paragraph of information describes your subject
                in greater detail.
              </h3>
              <br>
              </br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
              </p>
          </div>
        </div>
        <Footer />
      </main>

    </div>
  );
}

export default App;
