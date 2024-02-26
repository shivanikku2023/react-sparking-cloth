// Imports from Node Modules
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
// Custom Imports
import ProductCategories from './ProductCategories';

const Products = () => {
  // Should show loader
  // Should display success message
  // Should display error message
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [sortType, setSortType] = useState('Latest');

  const location = useLocation();
  const category = new URLSearchParams(location.search).get('category');
  // Fetching data from API
  let API_URL =
    category && category !== 'All'
      ? `http://localhost:3000/products?category=${category}`
      : 'http://localhost:3000/products';

  useEffect(() => {
    if (!category) {
      API_URL = 'http://localhost:3000/products';
    } else if (sortType !== 'Latest') {
      API_URL += `&_sort=maxRetailPrice&_order=${sortType}`;
    }
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res);
        setProductList(res.data);
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
  }, [API_URL]);

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

  const handlePriceSorting = (e) => {
    setSortType(e.target.value);
    if (e.target.value !== 'Latest') {
      const categoryParam = category ? `category=${category}&` : '';
      const API_SORT = `http://localhost:3000/products?${categoryParam}_sort=maxRetailPrice&_order=${e.target.value}`;
      axios
        .get(API_SORT)
        .then((res) => {
          console.log(res.data);
          setProductList(res.data);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setIsError(true);
        })
        .finally(() => {
          console.log('Filter data fetch is over');
        });
    }
  };

  // const handlePriceSorting = (e) => {
  //   if (orderType === e.target.value) {
  //     return true;
  //   }
  //   setOrderType(e.target.value);
  //   setOrderStatus(e.target.value);

  //   console.log(orderType);
  //   console.log(e.target.value);

  //   const API_URL = `http://localhost:3000/products_sort=maxRetailPrice&_order=${orderType}`;
  //   console.log(API_URL);
  //   const maxRetailPriceSorting = `http://localhost:3000/products?_sort=maxRetailPrice&_order=${orderType}`;

  //   axios
  //     .get(maxRetailPriceSorting)
  //     .then((res) => {
  //       console.log(res);
  //       setProductList(res.data);
  //       setIsLoading(false);
  //       setIsError(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsLoading(false);
  //       setIsError(true);
  //     })
  //     .finally(() => {
  //       console.log('It is over !');
  //     });
  // };

  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>

      <div className="container">
        <div className="row my-4 px-3">
          <div className="col-12">
            <h2 className="display-6">Products</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-2 mb-3">
            <ProductCategories />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="bg-light mb-3 lead">
                <strong className="text-darkmagenta">
                  {productList.length}
                </strong>{' '}
                <span>Products Found</span>
                <div className="float-end px-3">
                  <select
                    onChange={handlePriceSorting}
                    className="bg-lightmagenta p-1 border-0"
                  >
                    <option>Latest</option>
                    <option value="asc">Price - Low to High</option>
                    <option value="desc">Price - High to Low</option>
                  </select>
                </div>
              </div>

              {productList?.map((product) => {
                return (
                  <div key={product.id} className="col-4 mb-3">
                    <div className="border border-light">
                      <div className="card bg-light">
                        <img
                          className="card-img-top rounded-top d-inline mx-auto"
                          src={product.imageUrl}
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            <NavLink
                              className="nav-link text-darkmagenta"
                              to={`/products/${product.id}`}
                            >
                              {product.name}
                            </NavLink>
                          </h5>
                          <p className="text-truncate">{product.description}</p>{' '}
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
                                className="fw-light"
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
                          <button
                            type="button"
                            className="btn bg-darkmagenta btn-sm px-4 text-white mx-auto d-block"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
