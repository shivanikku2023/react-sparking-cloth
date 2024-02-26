import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

const LatestProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [latestProductList, setLatestProductList] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3000/products?_limit=3')
      .then((res) => {
        console.log(res);
        setLatestProductList(res.data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      })
      .finally(() => {
        console.log('It is over !');
      });
  }, []);

  if (isLoading) {
    return <div className="spinner-border text-success" role="status"></div>;
  }

  if (isError) {
    return (
      <div className="alert alert-danger">
        Sorry! Some Error Occurred. Try again later!
      </div>
    );
  }

  return (
    <>
      <div className="mt-3">
        <div className="container">
          <h3 className="display-6">Latest Products</h3>
          <p className="lead">
            SPARK CLOTHING monsoon sale at Up to 70% off on Fashion Jackets,
            Shirts, Dresses and more. Top Brands. Best Prices. Fast Delivery.
            Buy now! Low Prices. Easy and Fast Delivery. Huge Selection. Great
            Offers. Top Brands. No Cost EMI Available. Best Deals.
          </p>
          <div className="row">
            {latestProductList.map((product) => {
              return (
                <div key={product.id} className="col-4 mb-3">
                  <div className="border border-light">
                    <div className="card bg-light">
                      <img
                        className="card-img-top rounded mx-auto d-block w-75"
                        src={product.imageUrl}
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <NavLink
                            className="nav-link text-darkmagenta"
                            to="/products"
                          >
                            {product.name}
                          </NavLink>
                        </h5>
                        <p className="text-trunck">{product.description}</p>{' '}
                        <span className="w-25 px-2 py-1 bg-success text-white">
                          {product.discountPercent}% off
                        </span>
                        <span className="fs-6 p-1">
                          Category: {product.category}
                        </span>
                        <p className="my-2">
                          <span className="lead fw-bold">
                            <FontAwesomeIcon
                              icon={faIndianRupee}
                              className="fw-lighter"
                              style={{ color: '#888', fontSize: '14px' }}
                            />
                            .
                            {product.maxRetailPrice -
                              (product.maxRetailPrice *
                                product.discountPercent) /
                                100}
                          </span>
                          <span className="mx-2 fst-italic">M.R.P.:</span>
                          <del className="text-danger fst-italic">
                            {product.maxRetailPrice}{' '}
                          </del>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-3 mx-5 mb-3 text-center">
              <div href="#" className="btn btn-primary btn-xl px-5">
                <NavLink className="nav-link" to="/products">
                  View All Products
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="row bg-lightmagenta">
          <div className="col-md-4 text-center">
            <div className="mt-3 mb-3">
              <h5 className="lead">
                <strong>FREE SHIPPING and RETURN POLICIES</strong>
              </h5>
              <span>Free Shipping on all orders over Rs.499</span>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="mt-3 mb-3">
              <h5 className="lead">
                <strong>MONEY BACK GUARANTEE</strong>
              </h5>
              <span>!00% money back guarantee</span>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="mt-3 mb-3">
              <h5 className="lead">
                <strong>ONLINE SUPPORT BY 24/7</strong>
              </h5>
              <span>We are providing services on 24x7 </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProducts;
