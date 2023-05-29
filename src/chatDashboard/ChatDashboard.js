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
    const [user, setUser] = useState();

    const [contactList, setcontactList] = useState([]);
    const [selectedMessages, setSelectedMessages] = useState(messList);

    const [picChatter, setpicChatter] = useState(biden);
    const [nameChatter, setnameChatter] = useState("Biden");


    // Get the name and picture from the URL parameters
    const token = new URLSearchParams(location.search).get('token');
    const userna = new URLSearchParams(location.search).get('usern');

    var p1="";
    /*const user = Users.find((user) => user.userName === name1);
    if(user) {
        p1 = user.pic;
    }*/
    async function fetchUserData() {
        try {
            const response = await fetch(`http://localhost:5000/api/Users/${userna}`, {
                'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token // attach the token
                },
            });
            const data = await response.json();
            setpictureHead(data.profilePic);
            setdisplayName(data.displayName);
            } catch (error) {
                console.error('Error:', error);
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
            const data = await response.json();
            setcontactList(data);
            
            } catch (error) {
                console.error('Error:', error);
            }
    }

        fetchUserData();
        fetchchatsData();



    const addContact = (pic1, name1, time1, unreadmsg1, messages1) => {
        // Update the Contacts array directly
        const newContact = {pic:pic1, name:name1, time:time1, unreadmsg:unreadmsg1,messages:messages1};
        setcontactList((prevContacts) => [...prevContacts, newContact]);
    };

    const addmessage = (content1, time1, classtype1) => {
        // Update the Contacts array directly
        const newMessage = {content:content1, time:time1, classtype:classtype1};
        selectedMessages.push(newMessage);
        const mess = [...selectedMessages];
        setSelectedMessages(mess);
      };
    
    const doSearch = function(q) {
        setcontactList(Contacts.filter((contact) => contact.name.includes(q)));
    }

    const handleContactClick = (contact) => {
        setSelectedMessages(contact.messages);
        setpicChatter(contact.pic);
        setnameChatter(contact.name);
    };

    /*const handleContactClick2 = async (contact) => {
        try {
            const response = await fetch(`http://localhost:5000/api/Chats/${idChat}/Messages`, {
                'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token // attach the token
                },
            });
            const data = await response.json();
            setSelectedMessages(data);

            } catch (error) {
                console.error('Error:', error);
            }
        setSelectedMessages(contact.messages);
        setpicChatter(contact.pic);
        setnameChatter(contact.name);
    };*/

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
                    <ChatListResults messList1={selectedMessages} /> 
                </div>  
                <SendBox addMess={addmessage} /> 
            </div>    
        </div>      
    </div>      
  );
}

export default ChatDashboard;
