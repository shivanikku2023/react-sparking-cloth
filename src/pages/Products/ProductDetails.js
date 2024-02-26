import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faIndianRupee } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [isError, setIsError] = useState(false);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    // Let's hit the REST API
    // REST API URL? http://localhost:3000/products
    // Http Method GET
    // REST API client? axios
    axios
      .get('http://localhost:3000/products/' + id)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
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
      <Helmet>
        <title>Product Details</title>
      </Helmet>
      <div className="container">
        <div className="my-5">
          <h5 className="card-title">
            <NavLink className="nav-link text-darkmagenta" to={'/products'}>
              <FontAwesomeIcon icon={faAngleLeft} />
              <span className="px-2">Back</span>
            </NavLink>
          </h5>
        </div>
        <div className="row mb-5" key={product.id}>
          <div className="col-3">
            <img className="card-img-top" src={product.imageUrl} />
          </div>
          <div className="col-9">
            <div className="border border-light">
              <div className="card bg-light">
                <div className="card-body">
                  <p className="lead">
                    <strong>{product.name}</strong>
                  </p>
                  <p className="lead my-4">{product.description}</p>{' '}
                  <span className="w-25 px-2 py-1 bg-success text-white">
                    {product.discountPercent}% off
                  </span>
                  <span className="fs-6 p-1">Category: {product.category}</span>
                  <p className="my-2">
                    <span className="lead fw-bold">
                      <FontAwesomeIcon
                        icon={faIndianRupee}
                        className="fw-light"
                        style={{ color: '#888', fontSize: '14px' }}
                      />
                      .
                      {product.maxRetailPrice -
                        (product.maxRetailPrice * product.discountPercent) /
                          100}
                    </span>
                    <span className="mx-2 fst-italic">M.R.P.:</span>
                    <del className="text-danger fst-italic">
                      {product.maxRetailPrice}{' '}
                    </del>
                  </p>
                  <div>
                    <input
                      type="number"
                      className="d-inline"
                      placeholder="Qty"
                      max="5"
                      min="0"
                      style={{ width: '80px !important' }}
                    ></input>
                    <button
                      type="button"
                      className="btn bg-darkmagenta btn-sm px-4 text-white mx-3"
                    >
                      Add to Cart
                    </button>
                    <div className="float-end">
                      <span>Total Review 10</span>
                      <button
                        type="button"
                        className="btn bg-darkmagenta btn-sm px-4 text-white mx-3"
                        data-bs-toggle="modal"
                        data-bs-target="#writeReview"
                      >
                        Write a Review
                      </button>
                    </div>
                    {/* Modal */}
                    <div
                      className="modal fade"
                      id="writeReview"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex={-1}
                      aria-labelledby="writeReviewLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="lead fw-bold" id="writeReviewLabel">
                              Write a Review
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <p>
                              <label htmlFor="name" className="px-2">
                                Name:{' '}
                              </label>
                              <input
                                type="text"
                                id="name"
                                maxLength="30"
                                className="mx-1"
                              />
                            </p>
                            <p>
                              <label htmlFor="email" className="px-2">
                                Email:{' '}
                              </label>
                              <input
                                type="text"
                                id="email"
                                maxLength="30"
                                className="mx-2"
                              />
                            </p>
                            <p>
                              <label htmlFor="phone" className="px-2">
                                Phone:{' '}
                              </label>
                              <input
                                type="text"
                                id="phone"
                                maxLength="10"
                                className="mx-0"
                              />
                            </p>
                            <div className=''>
                              <label className="float-start px-2 my-3">Rating: </label>
                              <div className="starrating risingstar d-flex justify-content-end flex-row-reverse">
                                <input
                                  type="radio"
                                  id="star5"
                                  name="rating"
                                  defaultValue={5}
                                />
                                <label htmlFor="star5" title="5 star"></label>
                                <input
                                  type="radio"
                                  id="star4"
                                  name="rating"
                                  defaultValue={4}
                                />
                                <label htmlFor="star4" title="4 star"></label>
                                <input
                                  type="radio"
                                  id="star3"
                                  name="rating"
                                  defaultValue={3}
                                />
                                <label htmlFor="star3" title="3 star"></label>
                                <input
                                  type="radio"
                                  id="star2"
                                  name="rating"
                                  defaultValue={2}
                                />
                                <label htmlFor="star2" title="2 star"></label>
                                <input
                                  type="radio"
                                  id="star1"
                                  name="rating"
                                  defaultValue={1}
                                />
                                <label htmlFor="star1" title="1 star"></label>
                              </div>
                            </div>
                            <p className='my-2'>
                              <label
                                htmlFor="review"
                                className="px-2 d-block my-auto"
                              >
                                Review:{' '}
                              </label>
                              <textarea
                                id="review"
                                cols="55"
                                rows="4"
                              />
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn bg-light btn-sm px-3"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="btn bg-darkmagenta btn-sm px-4 text-white mx-3"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
