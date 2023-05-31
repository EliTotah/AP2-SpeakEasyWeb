import './ContactList.css'

function ContactList({ contact, onClick }) {
    let year = null;
    let date = null;
    let month = null;
    let day = null;
    let hours = null;
    let minutes = null;
    if (contact.lastMessage != null) {
        date = new Date(contact.lastMessage.created);
        year = date.getFullYear();
        month = ("0" + (date.getMonth() + 1)).slice(-2); // Add leading zero if necessary
        day = ("0" + date.getDate()).slice(-2); // Add leading zero if necessary
        hours = ("0" + date.getHours()).slice(-2); // Add leading zero if necessary
        minutes = ("0" + date.getMinutes()).slice(-2); // Add leading zero if necessary
    }

    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}`;

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
                            <p className="time unread">{formattedTime} {formattedDate}</p>
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

