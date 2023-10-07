import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.layout}>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
