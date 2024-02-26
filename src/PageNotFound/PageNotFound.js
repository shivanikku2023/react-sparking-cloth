import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../assets/images/page-not-found.jpg';

const PageNotFound = () => {
  return (
    <div className="row mb-5">
      <div className="col-md-4 p-5">
        <div className="m-5">
          <h2 className="mb-5">SPARK CLOTHING</h2>
          <h4 className='text-secondary'>
            <p>The requested URL was not found on this server.</p>
            <p>Please do check your Network bandwidth</p>
            <p>
              Visit Home page <Link to="/">Home Page</Link>
            </p>
          </h4>
        </div>
      </div>

      <div className="col-md-4 mb-5 p-5">
        <img src={NotFound} className="card-img-top" alt="Gallery Image" />
      </div>
    </div>
  );
};

export default PageNotFound;
