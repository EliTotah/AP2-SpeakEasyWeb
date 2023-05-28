import './/LoginPage.css'
import logo from '../img/logo.jpeg';
import Header from './Header';
import InputFields from './Inputfiels';
import Buttons from './buttons';
import { useState } from "react";
import Users from '../users/Users';
import { useNavigate } from 'react-router-dom';


function LoginPage(props) {
    const navigate = useNavigate();

    const [username1, setUsername] = useState('');
    const [password1, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data1 = {
            username: username1,
            password: password1
        }
        const res = await fetch('http://localhost:5000/api/Tokens', {
            'method': 'post', // send a post request
            'headers': {
                'Content-Type': 'application/json', // the data (username/password) is in the form of a JSON object
            },
            'body': JSON.stringify(data1) // The actual data (username/password)
        });
        // The server's response is a json object
        const json = await res.text();
        if (res.status != 200)
            alert('Invalid username and/or password')
        else {
            // Navigate to the ChatDashboard route with name and picture as URL parameters
            navigate(`/Chat`);
        
        }

        /*//const user = Users.find((user) => user.userName === username && user.password === password);
        if (user) {
            // successful login
            const name = user.userName;
            const picture = user.pic;
            // Navigate to the ChatDashboard route with name and picture as URL parameters
            navigate(`/Chat?name=${name}&picture=${picture}`);
        } else {
            // login failed
            alert('Invalid username or password');
        }*/
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className='page'>
        <div className="big">
            <img id="logo" src={logo}/> 
            <form name="form1" className="box" onSubmit={handleSubmit}>
                <Header/>
                <InputFields handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} />
                <Buttons/>
            </form>   
        </div> 
        </div>
    )
};


export default LoginPage;