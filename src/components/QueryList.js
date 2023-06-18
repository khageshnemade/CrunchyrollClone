import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MyNavigationLinks from "../Pages/MyNavigationLinks";

function QueryList() {
  const [queries, setQueries] = useState([]);
  const navigate = useNavigate(); // Access the navigate function

  useEffect(() => {
    axios
      .get("http://localhost:8000/queries")
      .then((response) => {
        setQueries(response.data);
      })
      .catch((error) => {
        console.log("Error retrieving queries:", error);
      });
  }, []);

  const handleDelete = async (queryId) => {
    try {
      await axios.delete(`http://localhost:8000/queries/${queryId}`);
      setQueries((prevQueries) =>
        prevQueries.filter((query) => query._id !== queryId)
      );
    } catch (error) {
      console.log("Error deleting query:", error);
    }
  };

  const handleEdit = (queryId) => {
    // Navigate to the edit page with the query ID
    navigate("./qu");
   
    
  };

  return (
    <div>
      <MyNavigationLinks />
      <h1>Query List</h1>
      {queries.map((query) => (
        <div key={query._id}>
          <p>Email: {query.email}</p>
          <p>Name: {query.name}</p>
          <p>Mobile: {query.mobile}</p>
          <p>Query: {query.query}</p>
          <button className="btn btn-danger" onClick={() => handleDelete(query._id)}>&times;</button>
          <button className="btn btn-warning" onClick={() => handleEdit(query._id)}>&#9998;</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default QueryList;
