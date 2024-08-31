import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Filter() {
const [searchParams,setSearchParams] = useSearchParams();
console.log(searchParams.get("age"))
console.log(searchParams.get("city"))
const age = searchParams.get("age")
const city = searchParams.get("city")



  return (
    <div>
      <h1> This is Filter Page </h1>
      <h3>Age is : {age}</h3>
      <h4>city is : {city}</h4>
    </div>
  )
}

export default Filter
