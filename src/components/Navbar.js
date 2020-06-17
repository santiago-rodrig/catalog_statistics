// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../images/logo.png';

const Component = () => (
  <nav className={styles.main_navbar}>
    <div className="container">
      <div>
        <Link to="/" data-testid="home_link">
          <img src={logo} alt="site logo" />
        </Link>
      </div>
    </div>
  </nav>
);

export default Component;
