import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Model = () => {

    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        event.preventDefault();
        const form=e.target;
       // console.log(form);
       const name = form.name.value;
       const email = form.email.value;
       const jobTitle = form.jobTitle.value;
       const company = form.company.value;

       const newUser ={
        name,
        email,
        jobTitle,
        company
       }
       //console.log(newUser);
       axios.post('http://localhost:3000/users/',newUser)
      .then((response)=> {
        console.log(response);
        alert("New User Added Successfully!")
        navigate("/")
      })
      .catch( (error)=> {
        console.log(error);
      });
    }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit} className="card">
            <h3 className="font-bold text-lg">Create A New User!</h3>
            {/*name*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
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
                placeholder="Ex:Microsoft"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Create</button>
            </div>
            {/* if there is a button in form, it will close the modal */}
            <div
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
