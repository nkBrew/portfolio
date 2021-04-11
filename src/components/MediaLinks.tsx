import React from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { MdMail } from 'react-icons/md';

const MediaLinks = (): JSX.Element => {
  return (
    <div className="is-flex is-justify-content-center">
      <a href="https://github.com/nkBrew" target="_blank" rel="noreferrer">
        <span className="media-link">
          <i className="fab fa-3x fa-github" />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/nicholasjwb/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="media-link">
          <i className="fab fa-3x fa-linkedin"></i>
        </span>
      </a>
    </div>
  );
};

export default MediaLinks;
