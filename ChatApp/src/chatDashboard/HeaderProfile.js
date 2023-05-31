import profile from "../img/bibi.jpg"
import Contacts from "./Contacts";
import './HeaderProfile.css'
import { useState } from "react";


function HeaderProfile( {addCon, name1, pic1} ) {

    const add = function (event) {
        event.preventDefault();
        const name = document.getElementById("contact-name").value;
        const time = "";
        const unreadmsg = "";
        const messages = [];
        const pic = `https://randomuser.me/api/portraits/${Math.random() < 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`
        addCon(name);
        
        document.getElementById("Modal").classList.remove("show");
        document.getElementById("Modal").setAttribute("aria-hidden", "true");
        document.getElementsByClassName("modal-backdrop")[0].remove();
        document.getElementsByClassName("form-control")[0].value = "";
      };

    return (
        <div className="header">
          <div className="user-img">
            <img className="dp" src={pic1} alt=""/>
          </div>
          <span className="displayName"> {name1} </span>
          <div className="nav-icons">

            <a role="button" data-bs-toggle="modal" data-bs-target="#Modal">
             <li><i className="bi bi-person-plus-fill"></i></li>
            </a> 

                  <div className="modal fade" id="Modal" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true" data-backdrop="false">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="ModalLabel">Add new contact</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="form-group">
                              <input type="text" className="form-control" id="contact-name" placeholder="contact's identifier"/>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={add}>Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
            <li><i className="bi bi-pencil-square"></i></li>
          </div>
        </div>     
    );
  }
  
  export default HeaderProfile;
  