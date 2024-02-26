// Importing from node modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
  const [contactData, setContactData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3000/contactData')
      .then((res) => {
        setIsLoading(false);
        setContactData(res.data);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return <div className="spinner-border"></div>;
  }

  if (isError) {
    return <div className="alert alert-danger">Please try after sometimes</div>;
  }
  return (
    <>
      <div className="display-6 px-3">Contact Us</div>
      <hr />
      <div className="lead px-3">
        <strong>
          <span className="fs-5 px-4 mb-2 d-block">SPARK CLOTHING</span>
          <FontAwesomeIcon icon={faBuilding} /> {contactData.address} <br />
          <FontAwesomeIcon icon={faPhone} /> {contactData.phone}
          <br />
          <FontAwesomeIcon icon={faEnvelope} />{' '}
          <a href="/" className="text-darkmagenta">
            {contactData.email}
          </a>
        </strong>{' '}
      </div>
      <hr />
      <div data-testid="contactUsDummyText" className="lead fs-6">
        <strong className='mb-2 d-block px-3'>If you need to contact us for any other services, please use the
        following contact channels: </strong>
        <ul>
          <li>
            For security incidents, email{' '}
            <a
              href="mailto:security@sparkclothing.com"
              className="text-darkmagenta"
            >
              security@sparkclothing.com.{' '}
            </a>
          </li>
          <li>
            Spark Clothing has appointed a Data Protection Officer, Rudi Kosiór.
            If you have questions or concerns regarding data protection or
            compliance with privacy regulations, please do not hesitate to reach
            out to him by sending an email to{' '}
            <a
              href="mailto:gdpr@sparkclothing.com"
              className="text-darkmagenta"
            >
              gdpr@sparkclothing.com.{' '}
            </a>
          </li>
          <li>
            If you have issues or complaints with service quality, billing,
            invoicing, or concerns about our policies, please reach out to us
            anytime through the send us a message button inside the spark
            clothing product or send an email to{' '}
            <a
              href="mailto:support@sparkclothing.com"
              className="text-darkmagenta"
            >
              support@sparkclothing.com.
            </a>
          </li>
          <li>
            For any complaints (e.g. related to sustainability, human rights, or
            environmental law), please send an email to{' '}
            <a
              href="mailto:complaints@sparkclothing.com"
              className="text-darkmagenta"
            >
              complaints@sparkclothing.com.
            </a>
          </li>
          <li>
            For any other issues, please send an email to{' '}
            <a
              href="mailto:contact@sparkclothing.com"
              className="text-darkmagenta"
            >
              contact@sparkclothing.com.
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
