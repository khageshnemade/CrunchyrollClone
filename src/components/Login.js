import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

 function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data == "notexist") {
            alert("Invalid email or password");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login">
      <div
        className="row  align-content-center text-center m-auto justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-md-8 col-sm-12">
          <h1>Login</h1>
          <form action="POST">
            <input
              className="form-control mb-2"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
            <input
              className="form-control mb-2"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            <input
              className="form-control mb-2 btn btn-primary"
              type="submit"
              onClick={submit}
            />
            <br />
            <Link
              className="text-end form-control text-decoration-none  bg-primary-subtle"
              to="/signup"
            >
              Signup Page
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
