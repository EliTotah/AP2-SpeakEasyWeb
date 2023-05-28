import { Link } from "react-router-dom";
import photo from "../img/Biden.jpg"
import './HeaderChatter.css'

function HeaderChatter({name,pic}) {

    return (
        <div className="header">
            <div className="img-text">
                <div className="user-img">
                <img className="dp" src={pic} alt=""/>
                </div>
            <h4>{name}<br/><span>Online</span></h4>
            </div>
            <div className="nav-icons">
                <i className="bi bi-search"></i>
                <i className="bi bi-telephone"></i>
                <Link id="linkTo" to="/"> <i className="bi bi-box-arrow-right" ></i> </Link> 
            </div>
      </div>   
    );
}

export default HeaderChatter;