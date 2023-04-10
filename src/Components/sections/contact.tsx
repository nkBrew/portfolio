import React, { FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const StyledContactSection = styled.section`
  width: 100%;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledContent = styled.div`
  border: solid 2px var(--light-slate);
  width: 500px;
  border-radius: 5px;
  padding: 20px 40px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  color: var(--light-slate);
  padding: 5px;

  input,
  textarea {
    background: inherit;
    padding: 10px 5px;

    border-radius: 5px;
    outline: none;
    border: solid 1px var(--slate);
    transition: 200ms;
    color: var(--grey);
    &:active,
    &:focus {
      border-color: var(--orange);
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 50%;
  }

  textarea {
    /* width: 80%; */
    height: 200px;
    resize: none;
  }

  > * {
    margin-top: 20px;
  }

  button {
    width: min-content;
    padding: 10px 40px;
    align-self: flex-end;
    border-radius: 5px;
    font-weight: bold;
    background-color: inherit;
    color: var(--slate);
    border: solid 1px;

    transition: 150ms;
    cursor: pointer;
    &:hover {
      background: var(--orange);
      color: black;
    }
  }

  .error {
    margin-top: 2px;
    font-size: 1.2rem;
    font-style: italic;
    height: 1.2rem;
  }
`;

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

const Contact = () => {
  const [email, setEmail] = useState('');
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }
    formRef.current &&
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, key).then(
        (result) => {
          setError('');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setError('Something went wrong...');
        },
      );
  };

  const validate = () => {
    const err = 'Please enter a name, valid email, and a message!';
    if (!name || !email || !email.match(emailRegex) || !value) {
      setError(err);
      return false;
    }
    return true;
  };

  return (
    <>
      <StyledContactSection>
        <h2 className="section-heading">Contact Me!</h2>
        <StyledContainer>
          <StyledContent>
            <StyledForm ref={formRef} onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  value={name}
                  name={'user_name'}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  value={email}
                  name={'user_email'}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label>Message</label>
                <textarea
                  value={value}
                  name={'message'}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Nice portfolio!"
                />
              </div>
              <div className="error">{error && <span>{error}</span>}</div>
              <button type="submit">Send</button>
            </StyledForm>
          </StyledContent>
        </StyledContainer>
      </StyledContactSection>
    </>
  );
};

export default Contact;
