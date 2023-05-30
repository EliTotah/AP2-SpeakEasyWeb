import './ContactList.css'

function ContactList({ contact, onClick }) {

    return (
        <div className="chat-list" onClick={onClick}>
            <div className="chat-box">
                <div className="img-box">
                    <img className="img-cover" src={contact.user.profilePic} alt="" />
                </div>
                <div className="chat-details">
                    <div className="text-head">
                        <h4>{contact.user.displayName}</h4>
                        {contact.lastMessage ? (
                            <p className="time unread">{contact.lastMessage.created}</p>
                        ) : null}
                    </div>
                    <div className="text-message">
                    {contact.lastMessage ? (
                    <p>{contact.lastMessage.content}</p>
                    ) : null}
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

