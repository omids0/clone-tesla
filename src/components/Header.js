import React from 'react';

function Header() {
      return <div className="header">
            <div className="logo">
                  <img src="./images/logo.svg" alt="tesla" />
            </div>
            <div className="width-menu">
                  <button>Model S</button>
                  <button>Model 3</button>
                  <button>Model X</button>
                  <button>Model Y</button>
                  <button>Solar Roof</button>
                  <button>Solar Panels</button>
            </div>
            <div className="right-menu">
                  <button className="hidden-btn">Shop</button>
                  <button className="hidden-btn">Account</button>
                  <button className="freeze-btn">Menu</button>
            </div>
      </div>;
}

export default Header;
