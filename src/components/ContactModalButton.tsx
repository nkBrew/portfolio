import React, { useState } from 'react';
import ContactModal from '../pages/ContactModal';

const ContactModalButton = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="contact-button" onClick={() => setOpen(true)}>
        Contact Me
      </button>
      <ContactModal open={open} closeModal={setOpen} />
    </div>
  );
};

export default ContactModalButton;
