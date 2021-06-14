import React, { useLayoutEffect, useState } from 'react';

const Navbar = (): JSX.Element => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useLayoutEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', updatePosition);
  }, []);

  let navbarClasses = 'navbar ';
  if (scrollPosition > 100) {
    navbarClasses += 'navbar-drop';
  }

  console.log(scrollPosition);
  return (
    <div className="navbar-container">
      <div className={navbarClasses}>
        <div className="navbar-content">
          <div className="navbar-logo">Logo</div>
          <ul className="navbar-links">
            <li className="navbar-item">
              <a className="underline">Education</a>
            </li>
            <li className="navbar-item">
              <a className="underline">Experience</a>
            </li>
            <li className="navbar-item">
              <a className="underline">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
