import './SendBox.css'
import { useState } from "react";



function SendBox({addMess}) {

    const add = function (event) {
        event.preventDefault();
        const content = document.getElementsByClassName("text")[0].value;
        const now = new Date(); // get the current time
        const time = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}); // format the time as a string
        const classtype = "message-box my-message";

        addMess(content, time, classtype);
        
        document.getElementsByClassName("text")[0].value = "";
      };

    return (
        <div className="chatbox-input">
            <i className="bi bi-emoji-smile"></i>
            <i className="bi bi-paperclip"></i>
            <input className="text" type="text" placeholder="Type a message"/>
            <i className="bi bi-send" onClick={add}> </i>
        </div>  
    );
}

export default SendBox;






















