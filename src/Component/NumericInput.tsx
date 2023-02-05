import React from "react";
type Props = {
  onChange: (num: number) => void,
  
  lable?: number,
  value: number;
};
function NumericInput({ onChange,value}: Props) {
  return (
    <div>
      <input 
        onChange={(event) => onChange(Number(event.target.value))}
        
        value={value}
      ></input>
    </div>
  );
}
export default NumericInput;