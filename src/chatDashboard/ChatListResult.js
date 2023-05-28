import ChatList from './ChatList.js'

function messagesListResults( {messList1} ) {  

    const messList = messList1.map((message,key)=>{
        return <ChatList {...message} key={key}/>
    });

    return (
        <div className="row"> {messList} </div>
    );
}

export default messagesListResults;