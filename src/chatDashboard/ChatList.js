import './ChatList.css'

function ChatLists({messages}) {
    const date = new Date( messages.created);
    const year = date.getFullYear();

    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Add leading zero if necessary
    const day = ("0" + date.getDate()).slice(-2); // Add leading zero if necessary
    const hours = ("0" + date.getHours()).slice(-2); // Add leading zero if necessary
    const minutes = ("0" + date.getMinutes()).slice(-2); // Add leading zero if necessary


    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}`;
    return (
        <div className="message-box friend-message">
            <p> {messages.content} <br/> <span>  {formattedTime} {formattedDate} </span></p>
        </div> 
    );
}

export default ChatLists;