// / Header KASA app ///

import React from "react";
import LOGO from "../medias/LOGO.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="kasa-container-header">
      <div className='kasa-header-section1'>
        <figure>
          <img alt="logo" src={LOGO} className="kasa-logo-header" />
        </figure>
        <ul className="kasa-ul-nav">
          <Link className="kasa-li-nav" to="/">Accueil</Link>
          <Link className="kasa-li-nav" to="/APropos">A Propos</Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
