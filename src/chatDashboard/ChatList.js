import './ChatList.css'

function ChatLists({messages}) {
    return (
        <div className="message-box friend-message">
            <p> {messages.content} <br/> <span> {messages.created} </span></p>
        </div> 
    );
}

export default ChatLists;