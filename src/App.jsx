import React from "react";
import TestimonialCard from "./components/TestimonialCard";

const customer = [
  {name:"Emily Whatson", review:"This service was amazing! highly recommended" },
  {name:"Jhon", review:"This service was ok ! Not recommended"}

];

const App = () => {
  return (
    <div style={{margin:50, padding:50,justifyContent:"center", backgroundColor:"lightcyan",borderRadius:5}}>
      <h1>Customer review</h1>
      <div style={{margin:10, padding:10 , backgroundColor:"lightblue",borderRadius:10}}>
        {customer.map((member, index) => (
          <TestimonialCard 
            key={index} 
            name={member.name}
            review={member.review}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
