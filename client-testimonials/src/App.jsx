import React from "react"
import "./components/Testimonialcard"
import CustomerCard from "./components/Testimonialcard"
const customers=[{Name:"Santhosh",review:"Too good and easy to use"},{Name:"Hitesh",review:"Cheap and best product"}]

const App=()=> {
  
  return (
  <div>
      {customers.map((customer,index)=>(
        <CustomerCard key={index} {...customer}/>
      ))}
  </div>
  )
}

export default App
