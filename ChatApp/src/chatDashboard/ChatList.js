import './ChatList.css'

function ChatLists({messages,username}) {
    const date = new Date(messages.created);
    const year = date.getFullYear();

    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Add leading zero if necessary
    const day = ("0" + date.getDate()).slice(-2); // Add leading zero if necessary
    const hours = ("0" + date.getHours()).slice(-2); // Add leading zero if necessary
    const minutes = ("0" + date.getMinutes()).slice(-2); // Add leading zero if necessary


    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}`;
    const classtype = messages.sender.username === username ? 'message-box my-message' : 'message-box friend-message';

    return (
        <div className={classtype}>
        <p> {messages.content} <br/> <span>  {formattedTime} {formattedDate} </span></p>
        </div> 
    );
}

export default ChatLists;