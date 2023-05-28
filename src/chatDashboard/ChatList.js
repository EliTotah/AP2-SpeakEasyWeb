import './ChatList.css'

function ChatLists({content, time, classtype}) {
    return (

        <div className={classtype}>
            <p> {content} <br/> <span> {time} </span></p>
        </div> 
    );
}

export default ChatLists;