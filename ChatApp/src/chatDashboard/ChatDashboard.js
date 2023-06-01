import ChatLists from "./ChatList";
import HeaderChatter from "./HeaderChatter";
import HeaderProfile from "./HeaderProfile";
import SearchBox from "./SearchBox";
import SendBox from "./SendBox";
import './ChatDashboard.css'
import Contacts from './Contacts.js'
import biden from '../img/Biden.jpg';
import { useState, useEffect } from "react";
import ContactListResults from "./ContactListResults";
import messList from './messegesLists.js';
import ChatListResults from './ChatListResult.js';
import { useLocation } from 'react-router-dom';
import Users from '../users/Users';


function ChatDashboard({activeUser}) {

    const location = useLocation();

    const [displayName1, setdisplayName] = useState();
    const [pictureHead, setpictureHead] = useState();

    const [contactList, setcontactList] = useState([]);
    const [selectedMessages, setSelectedMessages] = useState([]);

    const [picChatter, setpicChatter] = useState();
    const [nameChatter, setnameChatter] = useState();
  
    const [selecteduser, setselecteduser] = useState();

    // Get the name and picture from the URL parameters
    const token = new URLSearchParams(location.search).get('token');
    const userna = new URLSearchParams(location.search).get('usern');
    const [selecteduserName, setsselecteduserName] = useState(userna)

    useEffect(() => {
        async function fetchUserData() {
          try {
            const response = await fetch(`http://localhost:5000/api/Users/${userna}`, {
              'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token // attach the token
              },
            });
            if (response.status !== 200){
                throw new Error('Error')
            }
            const data = await response.json();
            setpictureHead(data.profilePic);
            setdisplayName(data.displayName);
          } catch (error) {
            alert(error);
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
                throw new Error('Error')
            }
            const data = await response.json();
            setcontactList(data);
          } catch (error) {
            alert(error);
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
            throw new Error('Error')
        }
        const data = await response.json();
        setcontactList(data);
      } catch (error) {
        alert(error);
      }
    }


    const addContact2 = (pic1, name1, time1, unreadmsg1, messages1) => {
        // Update the Contacts array directly
        const newContact = {pic:pic1, name:name1, time:time1, unreadmsg:unreadmsg1,messages:messages1};
        setcontactList((prevContacts) => [...prevContacts, newContact]);
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
                throw new Error('The user you requested does not exist in the system')
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

              if (response1.status !== 200){
                throw new Error('Error in send message');
            }
                const response2 = await fetch(`http://localhost:5000/api/Chats/${idChat}/Messages`, {

                    'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token // attach the token
                    },
                });

                if (response2.status !== 200){
                    throw new Error('Error');
                }
                const data = await response2.json();
                const sortedData = [...data].sort((a, b) => a.id - b.id);
                setSelectedMessages(sortedData);
                fetchchatsData2();
        } catch (error) {
          // Handle network error or other exceptions
          alert(error);
          }
    };

    const addmessage2 = (content1, time1, classtype1) => {
        // Update the Contacts array directly
        const newMessage = {content:content1, time:time1, classtype:classtype1};
        selectedMessages.push(newMessage);
        const mess = [...selectedMessages];
        setSelectedMessages(mess);
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
                throw new Error('Error');
            }
            const data = await response.json();
            const filteredData = data.filter(contact => contact.user.displayName.startsWith(q));
            setcontactList(filteredData);
        } catch (error) {
            alert(error);
          }
    }

    // const handleContactClick  = async (contact) => {
    //     setSelectedMessages(contact.messages);
    //     setpicChatter(contact.pic);
    //     setnameChatter(contact.name);
    // };

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
                throw new Error('Error');
            }
            const data = await response.json();
            const sortedData = [...data].sort((a, b) => a.id - b.id);
            setSelectedMessages(sortedData);
            setpicChatter(contact.user.profilePic);
            setnameChatter(contact.user.displayName);
            setselecteduser(contact.id);
            } catch (error) {
                alert(error);
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
                    <ChatListResults messList1={selectedMessages} username1 ={selecteduserName}/> 
                </div>  
                <SendBox addMess={addmessage}/> 
            </div>    
        </div>      
    </div>      
  );
}

export default ChatDashboard;
