import React, { useState } from "react";
import axios from "axios";
import MyNavigationLinks from "./MyNavigationLinks";

function Feedback() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [query, setQuery] = useState("");
  async function submitFeedback(e) {
    e.preventDefault();
  
    try {
      await axios.post("http://localhost:8000/feedback", {
        email: email,
        name: name,
        mobile: mobile,
        query: query
      });
  
      // Clear the form fields
      setEmail("");
      setName("");
      setMobile("");
      setQuery("");
  
      // Handle the successful submission or redirect to another page
    } catch (error) {
      // Handle the error
    }
  }
  return (<>
  
  
  <MyNavigationLinks/>
    <div className="feedback row justify-content-center">
      <h1 className="bg-primary">Feedback</h1>
      <form onSubmit={submitFeedback} className="bg-primary-subtle w-75 py-4">
        <input className="form-control col-md-8 col-sm-10 mb-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input className="form-control col-md-8 col-sm-10 mb-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input className="form-control  col-md-8 col-sm-10 mb-2"
          type="tel"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <textarea className="form-control col-md-8 col-sm-10 mb-2"
          placeholder="Query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        ></textarea> 
        <button className="col-lg-3 col-sm-6 btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  
  </>
  );
}

export default Feedback;
