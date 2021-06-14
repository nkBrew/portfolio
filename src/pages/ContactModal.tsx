import React from 'react';

interface ContactModalProps {
  open: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactModal = ({ open, closeModal }: ContactModalProps): JSX.Element => {
  let modalClassnames = '';
  if (open) {
    modalClassnames += 'is-active';
  }

  return (
    <div className={'modal ' + modalClassnames}>
      <div className="modal-content">
        <form>
          <div className="close-contact" onClick={() => closeModal(false)}>
            <span className="contact-modal-close" aria-label="close">
              &times;
            </span>
          </div>
          <p>Hello My name is Nicholas Brunoro </p>
          <label className="label">Email</label>
          <input className="input" type="email" />
          <label className="label">Name</label>
          <input className="input" type="text" />
          <label className="label">Message</label>
          <textarea className="textarea" type="text" />
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
