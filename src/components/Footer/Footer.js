import React from 'react';
import { Link } from 'react-router-dom';
// Font Awesome package used for fa icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBuilding,
  faPhone,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons';

// Importing local asset images
import socialIcons from '../../assets/images/social-icons-colored.jpg';

const Footer = () => {
  return (
    <>
      <div className="border border-secondary p-3 bg-light text-muted overflow-hidden">
        <div className="float-start fs-5">
          {/* Routing to Home page */}
          <Link to="/" className="text-darkmagenta">
            {/* Integrating fa-icons */}
            <FontAwesomeIcon
              icon="fa-solid fa-house"
              style={{ color: '#ff0000' }}
            />{' '}
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>{' '}
          <span> | </span>
          <Link to="/products" className="text-darkmagenta">
            <FontAwesomeIcon icon={faCartShopping} /> Products
          </Link>{' '}
          <span> | </span>
          <Link to="/about-us" className="text-darkmagenta">
            <FontAwesomeIcon icon={faBuilding} /> About
          </Link>{' '}
          <span> | </span>
          <Link to="/contact-us" className="text-darkmagenta">
            <FontAwesomeIcon icon={faPhone} /> Contact
          </Link>
        </div>
        {/* Integrating social media icons */}
        <div className="float-start px-3">
          <a href="https://www.facebook.com/" target="blank">
            <img src={socialIcons} alt="Social icons" />
          </a>
        </div>
        <div className="float-end">
          &copy; Copyright 2023 | SPARK CLOTHING. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
