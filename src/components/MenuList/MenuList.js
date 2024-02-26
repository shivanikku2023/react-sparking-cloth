// Functional Component with Arrow Function
import React from 'react';
import MenuItem from '../MenuList/MenuItem';

const MenuList = () => {
  const menuItems = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Products', path: '/products' },
    { id: 3, title: 'About Us', path: '/about-us' },
    { id: 4, title: 'Contact Us', path: '/contact-us' }
  ];
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {menuItems.map((menu) => (
        <MenuItem key={menu.id} title={menu.title} path={menu.path} />
      ))}
    </ul>
  );
};

export default MenuList;
