import photo from "../img/bush.jpg"
import './ContactList.css'

function ContactList({contact, onClick}) {
    const c1 = contact.json();
    const data = JSON.parse(c1);

    return (
        <div className="chat-list" onClick={onClick}>
            <div className="chat-box">
                <div className="img-box">
                <img className="img-cover" src={data[0].user.profilePic} alt=""/>
                </div>
                <div className="chat-details">
                    <div className="text-head">
                    <h4>{data[0].user.displayName}</h4>
                    <p className="time unread">{data[0].lastMessage.created}</p>
                    </div>
                    <div className="text-message">
                        <p>{data[0].lastMessage.content}</p>
                        {0 ? (
                         <b className="unread-count">{null}</b>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default ContactList;

