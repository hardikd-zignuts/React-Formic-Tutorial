import React from "react";
import { useFormik } from "formik";

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "Hardik4U",
    },
    onSubmit: (values) => {
      console.log("Form Values", values);
    },
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
