import React from 'react';
import ContactModalButton from '../components/ContactModalButton';
import MediaLinks from '../components/MediaLinks';
import Navbar from '../components/Navbar';
import '../styles/header.scss';

const Header = (): JSX.Element => {
  return (
    <section className="hero is-danger is-fullheight">
      <Navbar />
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">Nicholas Brunoro</p>
          <p className="subtitle">Software Engineer</p>
          <div className="subtitle">
            <MediaLinks />
          </div>
        </div>
        <ContactModalButton />
      </div>
    </section>
  );
};

export default Header;
