import './/Inputfiels.css';
import Users from '../users/Users';
import { Link } from 'react-router-dom';

function InputFields({ handleUsernameChange, handlePasswordChange }) {

    return (
        <div>
           <input type="text" id="username" name="username" placeholder="Username" autoComplete="off" required onChange={handleUsernameChange}/> 
            <input type="password" id="password" name="password" placeholder="Password" autoComplete="off" required onChange={handlePasswordChange}/> 
        </div>
    );
}

export default InputFields;