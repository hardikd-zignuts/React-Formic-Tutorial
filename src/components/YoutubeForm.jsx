import React from "react";
import { Formik, useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "Hardik4U",
};

const onSubmit = (values) => {
  console.log("Form Values", values);
};


const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default YoutubeForm;
