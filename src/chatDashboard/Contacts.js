import bush from "../img/bush.jpg";
import obama from "../img/obama.jpg";
import biden from "../img/Biden.jpg";
import trump from "../img/trump.jpg";
import messBiden from "./messegesLists";
import messBush from "./messBush";

const Contacts = [
{
        pic: bush,
        name: "Bush",
        time: "11:49",
        unreadmsg: 0,
        messages: messBush
    },

    {
        pic: obama,
        name: "Obama",
        time: "08:20",
        unreadmsg: 0,
        messages: []
    },

    {
        pic: biden,
        name: "Biden",
        time: "20:49",
        unreadmsg: 0,
        messages: messBiden
    }
];

export default Contacts;