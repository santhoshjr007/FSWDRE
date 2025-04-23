import React from "react";
 const CustomerCard=({Name,review})=>{
    return(
        <div>
            <h1>CustomerName:{Name}</h1>
            <h2>Review:{review}</h2>
        </div>
    )
 }
 export default CustomerCard