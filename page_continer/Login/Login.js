import React, { useState } from "react";
import Link from "next/link";
import router from 'next/router'
import axios from "axios";
import Suc from "./Suc";
const Login =()=> {
    const [val1,setVal1] = useState();
    const [val2,setVal2] = useState();
    const [error,setError] = useState("");
    
    // const [val3,setVal3] = setState()
    const onclickhandlev =(e)=>{
        e.preventDefault();
        let data={
            email : val1,
            password :val2
        }
        console.log(data);
        axios({
            url:"http://localhost:5000/student/Show/",
            method:"POST",
            params:data
        }).then((response) =>{
            console.log(response.data.error)
            if(response.data.error){
                setError(response.data.error)
            }
            else{
                console.log(response.data.current_user)
                router.push({
                    
                    pathname: '/succ',
                    
                });
            console.log('Data Login Succes')

            }
            
        }).catch((err) => {
            console.log(err);
           

        })
    }
    return (<>
        <div className="card">
         
        <h1 style={{textAlign:"center",marginTop:"30%"}}>Login</h1>
        <div className="In">
        <h3> {error} </h3>
        <form>
           <input className="Inp" type='email' value={val1} placeholder="Email" required onChange={(e) => setVal1(e.target.value)}/><br/>
          
           <input className="Inp" type='password'  value={val2} placeholder="Password" required onChange={(e) => setVal2(e.target.value)}/><br/>
           <button className="btn" type="submit" onClick={(e) => onclickhandlev(e)}>Submit</button>
           <p>Create account !
           <Link href="/signup"><a><b>Signup</b></a></Link></p>
           </form>
           </div>
        </div>
    </>)
}


export default Login