import React from "react"
type Props ={
    onChange:(str:string)=>void;
    placeholder:string;
    name:string;
    
    //age:number;
    lable?:string;
    value:string;
};
function Input({onChange,name,placeholder,value=""}:Props){
    return(
        <div>
            <input onChange={event=> onChange(event.target.value)}
            name={name}
            placeholder={placeholder}
            value={value}
            
            ></input>
        
        </div>
    );
}
export default Input

