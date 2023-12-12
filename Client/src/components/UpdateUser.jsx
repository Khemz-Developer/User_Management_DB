import axios from "axios";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export const UpdateUser = () => {
  const user = useLoaderData();
  console.log(user);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);
    const name = form.name.value;
    const email = form.email.value;
    const jobTitle = form.jobTitle.value;
    const company = form.company.value;

    const updatedUser = {
      name,
      email,
      jobTitle,
      company,
    }

    axios
      .put(`http://localhost:3000/users/${user._id}`, updatedUser, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        
        alert("User Updated Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.response.data.message;
        alert(errorMessage);
      })
  };
  return (
    <div className="max-w-md mx-auto">
      <form method="dialog" onSubmit={handleSubmit} className="card">
        <h3 className="font-bold text-lg">Update the User!</h3>
        {/*name*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            defaultValue={user.name}
            className="input input-bordered"
            required
          />
        </div>
        {/*email*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user.email}
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        {/*job title*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="jobTitle"
            defaultValue={user.jobTitle}
            placeholder="Ex:Developer"
            className="input input-bordered"
          />
        </div>
        {/*company*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company</span>
          </label>
          <input
            type="text"
            name="company"
            defaultValue={user.company}
            placeholder="Ex:Microsoft"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
        {/* if there is a button in form, it will close the modal */}
        {/* <div
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </div> */}
      </form>
    </div>
  );
};
