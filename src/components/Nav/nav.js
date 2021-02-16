import React from "react";

function Nav(props) {
  return (
    <nav className="navbar">
      <a className="logo" href="/" onClick={props.storageClear}>
        SkylarkSocial
      </a>
      <div
        onClick={props.toggleBurger}
        className={`burger-container ${props.burgerClass}`}
      >
        <div className="burger burger-main"></div>
      </div>
      <ul className={props.showUl}>
        {props.children.map(child => {
          return <li>{child}</li>;
        })}
      </ul>
    </nav>
  );
}

export default Nav;