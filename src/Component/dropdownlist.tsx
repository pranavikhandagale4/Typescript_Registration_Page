import React, { useState } from "react";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState("Select an option");
  const options = ["Developer", "Tester", "Designer","Android Developer"];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div style={{ fontFamily: 'Garamond', fontSize: 18 }}>
      <p>Selecte Role: {selectedValue}</p></div>
    </div>
  );
};

export default Dropdown;
