// importing from node modules
import React from 'react';
// importing custom components
import ContactInfo from './ContactInfo/ContactInfo';
import ContactForm from './ContactForm/ContactForm';

const ContactUsPage = () => {
  return (
    <>
      <div className="container">
        <div className="row my-4">
          <div className="col-md-6 bg-white">
            <ContactInfo />
          </div>
          <div className="col-md-6 shadow rounded">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
