import ChatList from './ChatList.js'

function messagesListResults( {messList1, username1} ) {  

    const messList = messList1.map((message,key)=>{
        return <ChatList messages={message} username={username1} key={key}/>
    });

    return (
        <div className="row"> {messList} </div>
    );
}

export default messagesListResults;