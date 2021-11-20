import React from 'react';
import '../../Styles/LeftBar.css';
import { Link } from 'react-router-dom';

const LeftBar = (props) => {
  return (
    <>
      <div class="container-leftbar">
        <Link to="/home">Home</Link>
        <Link to="providers">Providers</Link>
        <Link to="products">Products</Link>
      </div>
    </>
  );
};

export default LeftBar;
