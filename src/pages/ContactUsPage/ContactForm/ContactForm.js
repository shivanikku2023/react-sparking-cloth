// importing from node modules
import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [data, setData] = useState({
    name: '',
    email: '',
    messageNote: ''
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setData({
      ...data,
      [event.target.name]: value
    });
  };

  const onSubmit = (data, event) => {
    event.preventDefault();
    const getInTouchData = {
      name: data.name,
      email: data.email,
      messageNote: data.messageNote
    };

    axios
      .post('http://localhost:3000/getInTouchData', getInTouchData)
      .then(() => {
        setData({
          name: '',
          email: '',
          messageNote: ''
        });
        setIsReviewSubmitted(true);
      });
  };

  return (
    <>
      <form className="lead px-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="lead text-center my-5">
          <strong>
            Please drop your message, we will assist you on your requirements.
          </strong>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name<span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control border-bottom border-primary border-0 outline-warning"
            {...register('name', {
              required: 'Name is required.',
              pattern: {
                value: /^[a-zA-Z]{3,20}$/,
                message: 'Enter the valid name'
              }
            })}
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email<span className="text-danger">*</span>
          </label>

          <input
            type="text"
            className="form-control border-bottom border-primary border-0"
            {...register('email', {
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Enter the valid Email.'
              }
            })}
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />

          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="messageNote" className="form-label">
            Message<span className="text-danger">*</span>
          </label>

          <textarea
            className="form-control border-bottom border-primary border-0"
            id="messageNote"
            {...register('messageNote', {
              required: 'Message is required'
            })}
            name="messageNote"
            rows="3"
            value={data.messageNote}
            onChange={handleChange}
          />

          {errors.email && (
            <p className="text-danger">{errors.messageNote.message}</p>
          )}
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn bg-darkmagenta text-white mx-auto d-block px-3"
          >
            Send Message
          </button>
        </div>
      </form>
      {isReviewSubmitted && (
        <div className="toast-container">
          <div
            className="toast show text-bg-success p-2"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex">
              <div className="toast-body">Your request sent successfully.</div>
              <button
                type="button"
                className="btn-close me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
