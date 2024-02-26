import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ title, path }) => {
  console.log(title);
  return (
    <li className="nav-item">
      <NavLink className="nav-link fs-5" to={path}>
        {title}
      </NavLink>
    </li>
  );
};

MenuItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string
};

export default MenuItem;
