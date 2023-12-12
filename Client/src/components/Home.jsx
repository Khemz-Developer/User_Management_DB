import React, { useEffect, useState } from "react";
import axios from "axios";
import { Model } from "./Model";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get('http://localhost:3000/users/').then((response) =>{
        // handle success
        //console.log(response.data);
        setUsers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        
      })
  }, [users]);

const handleDelete =(id)=>{
  axios.delete(`http://localhost:3000/users/${id}`,{
    headers:{
      authorization:`Bearer ${localStorage.getItem("access token")}`
    }
  }).then((response)=>{
    alert(response.data.message);
  }).catch((error)=>{
    const errorMessage = error.response.data.message;
    alert(errorMessage);
  })
}
const signOut=()=>{
  localStorage.removeItem("access token")
}
 // console.log(users);
  return (
    <div className="my-12">
      {/*header */}
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_3').showModal()}>Create A User</button>
        <div className="flex space-x-3 ">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="w-24 input input-bordered md:w-auto"
            />
          </div>
         <Link to="/login"> <button className="btn btn-primary btn-outline">Login</button></Link>
          <button className="btn btn-primary btn-outline" onClick={signOut}>Signout</button>
        </div>
      </div>
      {/*table */}
      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="text-white bg-indigo-700 rounded-md">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Manage User</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user,index)=>(
                  <tr key={index}>
                  <th>{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.jobTitle}</td>
                  <td>{user.company}</td>
                  <td className="flex space-x-3">
                    <Link to={`update-user/${user._id}`}><button className="btn btn-xs btn-warning">Edit</button></Link>
                    <button className="btn btn-xs btn-error" onClick={()=>handleDelete(user._id)}>Delete</button>
                    <Link to={`view-user/${user._id}`}><button className="btn btn-xs btn-warning">View</button></Link>
                  </td>
                  </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
      <Model/>
    </div>
  );
};

export default Home;
