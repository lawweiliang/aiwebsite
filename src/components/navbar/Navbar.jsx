import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';

import logo from '../../assets/logo.svg';

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links__logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3__navbar-links__container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
      </div>

      {toggleMenu && (
        <div className="gpt3__navbar-menu__container scale-up-center">
          <div className="gpt3__navbar-menu__container-links">
            <Menu />
          </div>
          <div className="gpt3__navbar-menu__container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
