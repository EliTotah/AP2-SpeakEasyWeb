import { useState } from "react";
import Users from "./Users";

function AddUser({userName, password, pic, gender, phoneNumber,emailAdress}) {
    Users.join({pic},{userName},{password},{gender}, {phoneNumber}, {emailAdress})
}

export default AddUser;