import React, { useState } from "react";
import StrengthMeter from "./StrengthMeter";
import './LoginDetailsPage.css';
import { useNavigate } from 'react-router-dom';
import "../Page.css";



const LoginDetailsPage = ({ addUser30, userName1, name1, pic1, onPrev, setActiveUser }) => {
  //const {adduser1, userName1, name1, email1, phone1, gender1,pic1, onPrev} = props;

  const navigate = useNavigate();
  const [pwdInput, initValue] = useState({
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setError] = useState(null);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);


  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const onChange = (e) => {
    const password = e.target.value;
    initValue({
      ...pwdInput,
      password: password,
    });
    setError(null);
    let caps, small, num, specialSymbol;

    caps = (password.match(/[A-Z]/g) || []).length;
    small = (password.match(/[a-z]/g) || []).length;
    num = (password.match(/[0-9]/g) || []).length;
    specialSymbol = (password.match(/\W/g) || []).length;
    if (caps < 1) {
      setError("Must add one UPPERCASE letter");
      return;
    } else if (small < 1) {
      setError("Must add one lowercase letter");
      return;
    } else if (num < 1) {
      setError("Must add one number");
      return;
    } else if (specialSymbol < 1) {
      setError("Must add one special symbol: @$! % * ? &");
      return;
    }

  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const [isStrong, initRobustPassword] = useState(null);
  const initPwdInput = async (childData) => {
    initRobustPassword(childData);
  };

  const onSubmit1 = async (e) => {

    e.preventDefault();
    let caps, small, num, specialSymbol, checkPassword;
    caps = (pwdInput.password.match(/[A-Z]/g) || []).length;
    small = (pwdInput.password.match(/[a-z]/g) || []).length;
    num = (pwdInput.password.match(/[0-9]/g) || []).length;
    specialSymbol = (pwdInput.password.match(/\W/g) || []).length;
    if (pwdInput.password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (caps === 0 || small === 0 || num === 0 || specialSymbol === 0) {
      setError("Passwords must be strong");
      return;
    }
    else {
      const name = name1;
      const pass = document.getElementById("password").value;
      const username = userName1;
      // const email = email1;
      // const phone = phone1;
      // const gender = gender1;
      const pic = pic1;
      //setActiveUser(userName1);
      
      //const pass = document.getElementById("password").value;
      try{
        const response = await fetch('http://localhost:5000/api/Users', {
          method: 'post',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: pass,
            displayName: name,
            profilePic: pic,
            // gender: gender,
            // phone: phone,
            // email: email,
          }),
        });
    
    if (response.ok) {
      alert("Signup complete!"); // Show alert message
      //addUser30(name, pass, username, pic);
      navigate("/");
    } 
    if (response.status !== 200){
      throw new Error(await response.text());
    }
  } catch (error) {
    // Handle network error or other exceptions
    alert(error);
    }
  }
};

  return (
    <div className="login-page">
      <div className="title">Login Details:</div>
      <form onSubmit={onSubmit1}>
          <div className="field">
              <label className="label">*  Password</label>
              <input
                type={showPassword1 ? "text" : "password"}
                value={pwdInput.password}
                id="password"
                name="password"
                onChange={onChange}
                required
              />
              <span className="password-toggle-icon" onClick={togglePasswordVisibility1}>
                {showPassword1 ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
              </span>
          </div>
          <div className="passwordmassege">
            Password should contain minimum 4 characters, with one UPPERCASE, lowercase, number and special character: @$! % * ? &
          </div>
          {isError && <p className="errors"> {isError}</p>}
          <StrengthMeter
            password={pwdInput.password}
            confirmPassword={confirmPassword}
            actions={initPwdInput}
          />
          <div className="field">
            <label className="label">*  Confirm Password</label>
            <input
              type={showPassword2 ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={pwdInput.confirmPassword}
              onChange={onChangeConfirmPassword}
              required
            />
            <span className="password-toggle-icon" onClick={togglePasswordVisibility2}>
                {showPassword2 ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
              </span>
        </div>
        {isStrong === "strong" && <button type="submit">Register</button>}
        <div className="field btns">
          <button className="prev" onClick={onPrev}>Previous</button>
          <button className="next" >submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginDetailsPage;
