import photo from "../img/bush.jpg"
import './ContactList.css'


function ContactList({pic, name, time, unreadmsg, onClick, lastMessage}) {

    return (
        <div className="chat-list" onClick={onClick}>
            <div className="chat-box">
                <div className="img-box">
                <img className="img-cover" src={pic} alt=""/>
                </div>
                <div className="chat-details">
                    <div className="text-head">
                    <h4>{name}</h4>
                    <p className="time unread">{time}</p>
                    </div>
                    <div className="text-message">
                        <p>{lastMessage}</p>
                        {unreadmsg ? (
                         <b className="unread-count">{unreadmsg}</b>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default ContactList;

