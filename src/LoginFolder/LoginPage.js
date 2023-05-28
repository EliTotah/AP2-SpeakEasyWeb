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

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = Users.find((user) => user.userName === username && user.password === password);

        if (user) {
            // successful login
            const name = user.userName;
            const picture = user.pic;
            // Navigate to the ChatDashboard route with name and picture as URL parameters
            navigate(`/Chat?name=${name}&picture=${picture}`);
        } else {
            // login failed
            alert('Invalid username or password');
        }
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