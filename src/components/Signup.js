import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Signup() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [mobile,setMobile]=useState()

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                username,email,password,mobile
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

         
<div className="row  align-content-center text-center m-auto justify-content-center" style={{height:"100vh"}}>
                    
                    <div className="col-md-8 col-sm-12">
                    <h1>SignUp</h1>
                    <form action="POST">
                    <input className="form-control mb-2" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                    <input className="form-control mb-2" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                    <input className="form-control mb-2" type="email" onChange={(e) => { setUsername(e.target.value) }} placeholder="Username"  />
                    <input className="form-control mb-2" type="tel" onChange={(e) => { setMobile(e.target.value) }} placeholder="Mobile"  />
                    <input className="form-control mb-2 btn btn-primary" type="submit" onClick={submit} /><br />
                    <Link className="text-start form-control text-decoration-none text-warning bg-primary-subtle" to="/login">Login Page</Link>
                </form>
                    </div>
                </div>
    
        </div>
    )
}

export default Signup;
