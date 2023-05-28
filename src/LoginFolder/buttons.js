import { Link } from 'react-router-dom';
import './/buttons.css'
import { useNavigate } from 'react-router-dom';


function Buttons() {

    return (
        <div className='buttons'>
            <label>
                <input type="checkbox" id="checkbox"/> 
                <span></span>
                <small className="rmb">Remember me</small>
            </label>
            <Link to="/forget" id="forgetpass" className='link'>Forget Password?</Link>
            <input type="submit" value="Sign in" className="btn3"/>
            <Link to="/SignUp" id="dnthave" className='link'>Don't have an account? Sign up</Link>
        </div>
    );
}

export default Buttons;