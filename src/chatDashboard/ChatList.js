import './ChatList.css'

function ChatLists({messages,username}) {
  const classtype = messages.sender.username === username ? 'message-box my-message' : 'message-box friend-message';
  return (
        <div className={classtype}>
            <p> {messages.content} <br/> <span> {messages.created} </span></p>
        </div> 
    );
}

export default ChatLists;