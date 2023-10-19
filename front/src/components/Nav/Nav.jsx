import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo.svg';
import styles from './Nav.module.scss';

function Nav({ onSearch, logout }) {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <img src={Logo} alt='R&M Logo' />
      </div>

      <div className={styles.secondSection}>
        <div className={styles.wrapperItems}>
          <Link to='/home' className={styles.linknav}>
            <span className={styles.itemnav}>Home</span>
          </Link>
          <Link to='/about' className={styles.linknav}>
            <span className={styles.itemnav}>About</span>
          </Link>
        </div>

        <SearchBar onSearch={onSearch} />
        <Link to='/favorites'><button>Favorites</button></Link>
        <button className={styles.boton} onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Nav;
