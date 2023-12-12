import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function View() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response) => {
        // handle success
        setUser(response.data);
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      });
  }, [id]);

  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div className="w-1/2 p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">User Details</h2>
        <div className="mb-4">
          <span className="font-bold">Name:</span> {user.name}
        </div>
        <div className="mb-4">
          <span className="font-bold">Email:</span> {user.email}
        </div>
        <div className="mb-4">
          <span className="font-bold">Company:</span> {user.company}
        </div>
        <div className="mb-4">
          <span className="font-bold">Job Title:</span> {user.jobTitle}
        </div>

        <Link to="/" className="btn btn-primary">
          Back
        </Link>
      </div>
    </div>
  );
}

export default View;
