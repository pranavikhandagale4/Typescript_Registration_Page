import React from 'react'
type Practiceprop = {
  name:string;
  age:number;
}
// interface Practiceprop{
//   name:string;
//   age:number;
// }

const Practice = (props:Practiceprop) => {
  return (
    <div>
      <h2>
        Hello {props.name} 
        age {props.age} 
      </h2>
    </div>
  )
}

export default Practice
