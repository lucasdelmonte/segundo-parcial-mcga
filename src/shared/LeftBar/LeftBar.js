import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../LeftBar/LeftBar.module.css';

const LeftBar = (props) => {
  return (
    <>
      <div className={styles.containerLeftbar}>
        <Link to="/home">Home</Link>
        <Link to="providers">Providers</Link>
        <Link to="products">Products</Link>
      </div>
    </>
  );
};

export default LeftBar;
