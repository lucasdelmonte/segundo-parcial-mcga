import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LeftBar from '../LeftBar/LeftBar';
import Section from '../Section/Section';
import '../../Styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container-content">
        <LeftBar />
        <Section container={children} />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
