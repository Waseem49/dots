/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";

const Customers = () => {
  const [customerlist, setcustomerlist] = useState([]);
  const [showModal, setshowmodal] = useState(false);

  const modalbtn = () => {
    setshowmodal((pre) => !pre);
  };

  async function getData() {
    const { data } = await axios.get("http://localhost:5000/api/user");
    setcustomerlist(data.user);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const FullName = e.target[0].value;
    const Email = e.target[1].value;
    const Password = e.target[2].value;
    const CountryID = e.target[3].value;
    const StateID = e.target[4].value;
    const CityID = e.target[5].value;
    const LanguagesIDs = e.target[6].value;
    const IsActive = e.target[7].value;
    const userObj = {
      FullName,
      Email,
      Password,
      CountryID,
      StateID,
      CityID,
      LanguagesIDs,
      IsActive,
    };
    await axios
      .post("http://localhost:5000/api/user", JSON.stringify(userObj))
      .then((res) => console.log(res));
    getData();
  };

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/user/${id}`);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="Customers-list">
        <div>
          <h3>Customers List</h3>
        </div>
        <div>
          <button onClick={modalbtn}>Add New</button>
        </div>
      </div>
      <div className="modal" style={{ display: showModal ? "block" : "none" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <h3>Manage Customres</h3>
          <button onClick={() => setshowmodal(false)}>Close</button>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Fullname">Fullname</label>
            <input
              type="text"
              name="Fullname"
              placeholder="Fullname"
              id="Fullname"
            />
            <br />
            <label htmlFor="Email">Email</label>
            <input type="text" name="Email" placeholder="Email" />
            <br />
            <label htmlFor="Password">Password</label>
            <input type="text" name="Password" placeholder="Password" />
            <br />
            <label htmlFor="Country">Country</label>
            <select name="Country" id="Country">
              <option value="india">India</option>
              <option value="nepal">Nepal</option>
              <option value="srilanka">Srilanka</option>
            </select>
            <br />
            <label htmlFor="Country">State</label>
            <select name="State" id="State">
              <option value="bihar">Bihar</option>
              <option value="up">UP</option>
              <option value="mp">MP</option>
            </select>
            <br />
            <label htmlFor="Country">City</label>
            <select name="State" id="State">
              <option value="patna">Patna</option>
              <option value="bhopal">Bhopal</option>
              <option value="delhi">Delhi</option>
            </select>
            <br />
            <label htmlFor="Language">Language</label>
            <select name="State" id="State">
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
              <option value="urdu">Urdu</option>
            </select>
            <br />
            <label htmlFor="IsActive">IsActive</label>
            <input type="checkbox" name="" id="IsActive" />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>FullName</th>
              <th>Email</th>
              <th>Password</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>Language</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {customerlist?.map((el) => (
              <tr key={el._id}>
                <td>{el._id}</td>
                <td>{el.FullName}</td>
                <td>{el.Email}</td>
                <td>{el.Password}</td>
                <td>{el.CountryID}</td>
                <td>{el.StateID}</td>
                <td>{el.CityID}</td>
                <td>{el.LanguagesIDs}</td>
                <td>{el.createdAt}</td>
                <td>
                  <button onClick={() => handleEdit(el._id)}>Edit</button>
                  <button onClick={() => handleDelete(el._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Customers;

/*
 {
      _id: '65741f6bdfdd70ffa0994493',
      FullName: 'nadi',
      Email: 'nadi@gamil.com',
      Password: 'nadi',
      CountryID: 'india',
      StateID: 'UP',
      CityID: 'sultanpur',
      IsActive: false,
      LanguagesIDs: 'hindi',
      createdAt: '2023-12-09T08:03:55.748Z',
      updatedAt: '2023-12-09T08:03:55.748Z'
    },
*/
