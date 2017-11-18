import React from 'react';
import './home-layout.css';

const Layout = (props) => (
  <section className="HomeLayout">
    {props.children}
  </section>
)

export default Layout;
