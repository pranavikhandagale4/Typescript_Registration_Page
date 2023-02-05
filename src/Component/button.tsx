import React, { useState } from "react";

function MyButton() {
  const [bgColor, setBgColor] = useState("red");

  function handleClick() {
    setBgColor(bgColor === "red" ? "" : "red");
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '8vh' }}>
<button style={{ backgroundColor: bgColor,height: 50, width: 100, fontFamily: 'Monospacef', fontSize: 18, fontWeight: 'bold' }} onClick={handleClick}>SUBMIT</button></div>
  );
}

export default MyButton;
