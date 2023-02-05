import React, { useState } from "react";
// import AgeInput from "./Component/NumericInput";
import "./App.css";

import axios from "axios";
import Input from "./Component/Input";
import NumericInput from "./Component/NumericInput";
import MyButton from "./Component/button";
import Dropdown from "./Component/dropdownlist";

const App = () => {
  const [FirstnameInput, setFirstNameInput] = useState("");
  const [EmailInput, setEmailInput] = useState("");
  const [AddressInput, setAddressInput] = useState("");
  const [LastnameInput, setLastNameInput] = useState("");
  const [MobileNoInput, setMobileNoInput] = useState(0);
  const [CompanyNameInput, setCompanyNameInput] = useState("");


  const onChangeFirstname = (str: string) => {
    setFirstNameInput(str);
  };
  const onChangeEmail = (str: string) => {
    setEmailInput(str);
  };

  const onChangeAddress = (str: string) => {
    setAddressInput(str);
  };

  const onChangeLastname = (str: string) => {
    setLastNameInput(str);
  };

  const onChangeMobileNo = (num: number) => {
    setMobileNoInput(num);
  };



  const onChangeCompanyName = (str: string) => {
    setCompanyNameInput(str);
  };

  const handleSave = () => {
    const data = {
      Lastname: LastnameInput,
      Firstname: FirstnameInput,
      Email: EmailInput,
      Address: AddressInput,
      MobileNo: MobileNoInput,
      CompanyName: CompanyNameInput
    };
    const url = 'https://localhost:44386/api/Test/Registration';
    axios.post(url, data).then((result) => {

      alert(result.data);
    }).catch((error) => {
      alert(error);
    })

  }
  return (
    <div className="App">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh', fontFamily: 'Monospacef', fontSize: 16, fontWeight: 'bold' }}>
        <h2>REGISTRATION FORM</h2></div>
      <form>
        {/* <label>Employee Code</label>
        <NumericInput 
        onChange={onChangeEmployeeCode}
        value={EmployeeCodeInput}></NumericInput><br></br> */}
        <div style={{ fontFamily: 'Garamond', fontSize: 18 }}>
          <label>First Name</label>
          <Input
            onChange={onChangeFirstname}
            name="FirstName"
            placeholder="Enter Name"
            value={FirstnameInput}></Input></div> <br></br>

        <div style={{ fontFamily: 'Garamond', fontSize: 18 }}>
          <label>Last Name</label>
          <Input
            onChange={onChangeLastname}
            name="LastName"
            placeholder="Enter Name"
            value={LastnameInput}></Input></div><br></br>


        <div style={{ fontFamily: 'Garamond', fontSize: 18 }}>
          <label>Email</label>
          <Input
            onChange={onChangeEmail}
            name="Email"
            placeholder="Enter Email"
            value={EmailInput}></Input></div><br></br>

        <div style={{ fontFamily: 'Garamond', fontSize: 18 }}>
          <label>Address</label>
          <Input
            onChange={onChangeAddress}
            name="Address"
            placeholder="Enter Address"
            value={AddressInput}></Input></div><br></br>


        <div style={{ fontFamily: 'Garamond', fontSize: 18 }}>
          <label>Mobile Number</label>
          <NumericInput
            onChange={onChangeMobileNo}
            value={MobileNoInput}></NumericInput></div><br></br>

        <div style={{ fontFamily: 'Garamond', fontSize: 18 }}>
          <label>Enter Company Name</label>
          <Input
            onChange={onChangeCompanyName}
            name="CompanyName"
            placeholder="Enter Company Name"
            value={CompanyNameInput}></Input></div>
            <br></br>

        <Dropdown />
     
        <MyButton />
      </form>
    </div>
  )

}
export default App
