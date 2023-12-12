import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const navigate = useNavigate()
  const handleLogin = (e) => {
    event.preventDefault();
    const form = e.target;
    // console.log(form);
    const password = form.password.value;
    const email = form.email.value;

    axios.post('http://localhost:3000/jwt', {
        email
      })
      .then( (response)=> {
        //console.log(response);
        localStorage.setItem("access token",response.data.token);
        alert("login successfull");
        navigate("/")
      })
      .catch((error)=> {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 md:w-[480px] max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
