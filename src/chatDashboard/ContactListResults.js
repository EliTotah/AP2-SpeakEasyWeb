import ContactList from "./ContactList";


function ContactListResults({ contacts, onContactClick }) {

    const conList = contacts.map((contact,key)=>{
        return <ContactList {...contact} key={key} onClick={() => onContactClick(contact)} lastMessage={contact.messages[contact.messages.length - 1]?.content}/>
    });

    return (
        <div className="row" > {conList} </div>
    );
}

export default ContactListResults;


