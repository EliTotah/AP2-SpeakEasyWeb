import logo from '../img/logo.jpeg';
import { useState } from "react";
import Users from '../users/Users';
import './ForgetPass.css'
import {Link} from "react-router-dom"

function ForgetPass() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const user = Users.find((user) => user.userName === username);

        if (user) {
            setPassword(user.password);
        } else {
            // login failed
            alert('Invalid username');
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    return (
        <div className='page'>
            <div className="big">
                <img id="logo" src={logo}/> 
                <h3>SpeakEasy</h3>
                <h5>Forget Password</h5>
                <div> Please enter your UserName </div>
                <input type="text1" id="username" className="username" placeholder="Username" autoComplete="off" required onChange={handleUsernameChange}/> 
                <input type="submit" value="Check" className="btn2" onClick={handleSubmit}/> 
                <div className='for'> Your password is {password} </div>  
                <Link to="/" id="dnthave1" className='link'>Return to Login</Link>
            </div> 
        </div>
    )
};

export default ForgetPass;