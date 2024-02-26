import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';

const ProductCategories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productCategoriesList, setproductCategories] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3000/categories')
      .then((res) => {
        console.log(res);
        setproductCategories(res.data);
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
        <title>Products</title>
      </Helmet>
      <div className="py-0 px-3 mb-3">
        <strong>Categories</strong>
      </div>
      <div className="border border-light py-0 px-3">
        {productCategoriesList?.map((productCategories) => {
          return (
            <div key={productCategories.id}>
              <NavLink
                to={
                  productCategories.name !== 'All'
                    ? `/products?category=${productCategories.name}`
                    : '/products'
                }
                className="nav-link list-group-item list-group-item-action lead p-2 border border-bottom border-0 border-danger"
              >
                {productCategories.name}
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCategories;
