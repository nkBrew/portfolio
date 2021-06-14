import React from 'react';
import ContactModalButton from '../components/ContactModalButton';
import MediaLinks from '../components/MediaLinks';
import Navbar from '../components/Navbar';
import '../styles/header.scss';

const Header = (): JSX.Element => {
  return (
    <section className="header">
      <Navbar />
      <div className="header-content">
        <div className="header-body">
          <div className="container has-text-centered">
            <p className="title">Nicholas Brunoro</p>
            <p className="subtitle">Software Engineer</p>
            <div className="subtitle">
              <MediaLinks />
            </div>
          </div>
          <ContactModalButton />
        </div>
      </div>
    </section>
  );
};

export default Header;
