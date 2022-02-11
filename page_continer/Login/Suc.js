import React,{useEffect, useState} from "react";
import axios from "axios";
import Table from "./Table"
const Suc = () =>{
    const [ d,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://api.ananta.dev.cogoport.io/list_locations')
    .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data.list)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
    },[])
    return(
        <>
            <h1 style={{textAlign:'center'}}>WelCome To Cogoport Location !!!! </h1>
            
            <div class="flex-container" style={{backgroundColor:"rgb(239, 241, 244)"}}>
            <div>Name</div><div >Type</div><div>Status</div><div>Created at</div>
            </div>
        
            {/* <table >
                    <tr>
                        <th >Name</th>
                        <th>Type</th>
                        <th >Status</th>
                        <th>Created at</th>
                    </tr> */}
                    
                    
               
            { d.map((value) =>{
                return (<> 
                
                    
                <Table  id={value.id} name={value.name} type={value.type} dis={value.created_at} status={value.status}/>

                {/* <div className="Ca"> 
                 <div className="ha">
                 <h3>{value.name}</h3>
                 <p>{value.display_name}</p>
                 <p>{value.type}</p>
                 <p>{value.status}</p>
                 </div></div> */}
                 </>);
            }
            )}
            {/* </table> */}



        </>
    );
}
export default Suc