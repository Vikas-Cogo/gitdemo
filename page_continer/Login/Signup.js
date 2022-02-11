import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import router from 'next/router'
const Signup =()=> {
    const [val1, setVal1] = useState();
    const [val2, setVal2] = useState();
    const [val3, setVal3] = useState();
    const [val4, setVal4] = useState();
    console.log(val1);
    const onclickhandlev = (e) => {
        e.preventDefault();
        let data = {
            name : val1,
            email : val2,
            contact : val3,
            password : val4
        }
        console.log(data);

        axios({
            url: "http://localhost:5000/student/",
            method: "POST",
            params: data
        }).then((response) => {
            console.log(response)
            router.push({
                pathname: '/home',
                
            });
            console.log('Data Save succesfully !')
        }).catch((err) => {
            console.log(err);
        })
     } 
    return (<>
        <div className="card">
        <h1 style={{textAlign:"center",marginTop:"30%"}}>Signup</h1>
        <div className="In">
        <form>
           <input className="Inp" type='text' name="name" value={val1} placeholder="Name" required onChange={(e) => setVal1(e.target.value)}/><br/>
           <input className="Inp" type='email' name="Email" value={val2} placeholder="Email" required onChange={(e) => setVal2(e.target.value)}/><br/>
           <input className="Inp" type='number' name="Contact" value={val3} placeholder="Phone Number" required onChange={(e) => setVal3(e.target.value)}/><br/>
          
           <input className="Inp" type='password' name="password" value={val4} placeholder="Password" required onChange={(e) => setVal4(e.target.value)}/><br/>
           
           <button className="btn" type="submit" onClick={(e) => onclickhandlev(e)}>Submit</button>
           <p>Login Account !
           <Link href="/home" ><a><b>Login</b></a></Link>
           </p>
           </form>
           </div>
        </div>
    </>)
}

export default Signup