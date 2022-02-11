import React from "react";

const Table =(value)=>{
    const clickb =(id)=>{
        console.log(id)
        return <>
        <h1></h1>
         
          
         <h1>{value.name}</h1>
     </>
    }

    return(
        <>
        <div className="flex-container" onClick={()=>clickb(value.id)} >
            <div>{value.name}</div><div >{value.type}</div><div>{value.status}</div><div>{value.dis}</div>
        </div>
        
        {/* <table className="tab"> */}
        {/* <tr key={value.name} >

        <td >{value.name}</td>
        <td>{value.type}</td>
        <td>{value.status}</td>
        <td>{value.dis}</td> 
        </tr> */}
       

        
    {/* </table> */}

            
        </>
    );

}

export default Table

