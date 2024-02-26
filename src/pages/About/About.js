import React from 'react';
import { Helmet } from 'react-helmet-async';
import imgValue from '../../assets/images/henger.png';
import imgBrand from '../../assets/images/cloths.png';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="border border-secondary p-5 lead w-75 m-auto my-3">
              <div className="text-center display-5 mb-2">About Us</div>
              <p>
                SPARK CLOTHING caters to thoughtful shoppers who appreciate
                unique designs and top quality pieces you just can not find
                anywhere else. We are constantly curating fresh new collections
                and looking for the next big thing our customers will love.
                Founded in Vienna in 2019, we are proud to be your Online
                Clothing Shop that you can rely on for our expert service and
                care.
              </p>
              <p className='text-center text-darkmagenta font-bolder'>
                <NavLink to="/about-us/history" className="nav-link" >
                  <strong>History of SPARK CLOTHING</strong>
                </NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-6">
            <div className="border border-secondary p-3 lead w- m-auto">
              <div className="text-center display-6 mb-3">
                Value proposition
              </div>
              <p className=" text-center">
                <img src={imgValue} alt="About us image" />
              </p>
              <p className="text-center">
                SPARK CLOTHING value proposition revolves around giving
                consumers the power and ease of purchasing fashion and lifestyle
                products online.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="border border-secondary p-3 lead w- m-auto">
              <div className="text-center display-6 mb-3">Brands</div>
              <p className=" text-center">
                <img src={imgBrand} alt="About us image" />
              </p>
              <p className=" text-center">
                SPARK CLOTHING understands its shoppers needs and caters to them
                with choice of apparel over 500 leading Indian and international
                brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
