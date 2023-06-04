import HeaderChatter from "./HeaderChatter";
import HeaderProfile from "./HeaderProfile";
import SearchBox from "./SearchBox";
import SendBox from "./SendBox";
import './ChatDashboard.css'
import { useState, useEffect } from "react";
import ContactListResults from "./ContactListResults";
import ChatListResults from './ChatListResult.js';
import { useLocation } from 'react-router-dom';
import io from "socket.io-client"

function ChatDashboard({activeUser,token}) {

    const [displayName1, setdisplayName] = useState();
    const [pictureHead, setpictureHead] = useState();

    const [contactList, setcontactList] = useState([]);
    const [selectedMessages, setSelectedMessages] = useState([]);

    const [picChatter, setpicChatter] = useState();
    const [nameChatter, setnameChatter] = useState();
  
    const [selecteduser, setselecteduser] = useState();

    const [socket, setSocket] = useState(null);

    useEffect(() => {
      const socket1 = io.connect('http://localhost:5000');
  
      setSocket(socket1);
      if(socket && selecteduser) {
        socket.emit("join_chat",selecteduser);
      }
      return () => {
        if(socket) {
        // Clean up the WebSocket connection when the component unmounts
        socket.disconnect();
        }
      };
    }, [selecteduser]);

    useEffect(() => { 
      if (socket) {
        socket.on("receive_message",(data) => {
        //if (data.chatId === selecteduser) {          
        setSelectedMessages((list) => [...list, data.content]);
        fetchchatsData2();
        //getMessages2();
        }
      );}
  },[socket]);

    useEffect(() => {
        async function fetchUserData() {
          try {
            const response = await fetch(`http://localhost:5000/api/Users/${activeUser}`, {
              'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token // attach the token
              },
            });
            if (response.status !== 200){
                throw new Error(await response.text());
            }
            const data = await response.json();
            setpictureHead(data.profilePic);
            setdisplayName(data.displayName);
          } catch (error) {
              alert(error.message);
          }
        }
    
        async function fetchchatsData() {
          try {
            const response = await fetch(`http://localhost:5000/api/Chats`, {
              'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token // attach the token
              },
            });

            if (response.status !== 200){
                throw new Error(await response.text())
            }
            const data = await response.json();
            setcontactList(data);
          } catch (error) {
            alert(error.message);
          }
        }
        // Call the functions
        fetchUserData();
        fetchchatsData();
    },[]);

    async function fetchchatsData2() {
      try {

        const response = await fetch(`http://localhost:5000/api/Chats`, {
          'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token // attach the token
          },
        });

        if (response.status !== 200){
            throw new Error(await response.text())
        }
        const data = await response.json();
        setcontactList(data);
      } catch (error) {
          alert(error.message);
      }
    }

    async function getMessages2() {
      const idChat = selecteduser
      try {

        const response2 = await fetch(`http://localhost:5000/api/Chats/${idChat}/Messages`, {
                    'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token // attach the token
                    },
                });

                if (response2.status !== 200){
                    throw new Error(response2.text());
                }
                const data = await response2.json();
                const sortedData = [...data].sort((a, b) => a.created - b.created);
                setSelectedMessages(sortedData);
                 // Emit the message to the WebSocket server
                fetchchatsData2();
        } catch (error) {
          // Handle network error or other exceptions
          alert(error.message);
          }
    };

    async function addContact(name1) {
        //Update the Contacts array directly
        try{
            const d = {username: name1};
            const response = await fetch(`http://localhost:5000/api/Chats`, {
              'method': 'POST',
              'headers': {
                'authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
              },
              'body': JSON.stringify(d)
            });
            if (response.status !== 200){
                throw new Error(await response.text())
            }
            fetchchatsData2();
      } catch (error) {
            // Handle network error or other exceptions
            alert(error);
  }
};

 const addmessage = async (content1)=>{
        const idChat = selecteduser
        try{
              const response1 = await fetch(`http://localhost:5000/api/Chats/${idChat}/Messages`, {
                'method': 'post',
                'headers': {
                  'authorization': 'Bearer ' + token,
                  'Content-Type': 'application/json',
                },
                'body': JSON.stringify({
                  msg: content1
                })
              });
              if (response1.status !== 200) {
                throw new Error(response1.text());
              }
              const data2 = await response1.json();
               // Emit the message to the WebSocket server
               socket.emit('send_message', {
                chatId: selecteduser,
                content: data2,
              });
                const response2 = await fetch(`http://localhost:5000/api/Chats/${idChat}/Messages`, {
                    'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token // attach the token
                    },
                });

                if (response2.status !== 200){
                    throw new Error(response2.text());
                }
                const data = await response2.json();
                const sortedData = [...data].sort((a, b) => a.created - b.created);
                setSelectedMessages(sortedData);
                
                fetchchatsData2();
        } catch (error) {
          // Handle network error or other exceptions
          alert(error.message);
          }
    };
    
    const doSearch = async function(q) {
        try {

            const response = await fetch(`http://localhost:5000/api/Chats`, {

              'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token // attach the token
              },
            });

            if (response.status !== 200){
                throw new Error(await response.text());
            }
            const data = await response.json();
            const filteredData = data.filter(contact => contact.user.displayName.startsWith(q));
            setcontactList(filteredData);
        } catch (error) {
            alert(error.message);
          }
    }

    const handleContactClick = async (contact) => {
        const idChat = contact.id;
        try {
            const response = await fetch(`http://localhost:5000/api/Chats/${idChat}/Messages`, {
                'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token // attach the token
                },
            });

            if (response.status !== 200){
                throw new Error(await response.text());
            }
            const data = await response.json();
            const sortedData = [...data].sort((a, b) => a.created - b.created);
            setSelectedMessages(sortedData);
            setpicChatter(contact.user.profilePic);
            setnameChatter(contact.user.displayName);
            setselecteduser(contact.id);
            } catch (error) {
                alert(error.message);
            }
    };

  return (
    <div className="chatPage">
        <div className="background-green"/> 
        <div className="main-container">
            <div className="left-container">
                <HeaderProfile addCon={addContact}  name1={displayName1} pic1={pictureHead}/> 
                <SearchBox doSearch={doSearch}/>
                <div className="contacts" >
                    <ContactListResults contacts={contactList} onContactClick={handleContactClick}/>
                </div>
            </div>
            <div className="right-container">
                <HeaderChatter name={nameChatter} pic={picChatter}/>
                <div className="chat-container"> 
                    <ChatListResults messList1={selectedMessages} username1 ={activeUser}/> 
                </div>  
                <SendBox addMess={addmessage}/> 
            </div>    
        </div>      
    </div>      
  );
}


//socket.emit("join_chat",selecteduser);

export default ChatDashboard;