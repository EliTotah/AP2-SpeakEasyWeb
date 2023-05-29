import ContactList from "./ContactList";


function ContactListResults({ contacts, onContactClick }) {

    const conList = contacts.map((contact,key)=>{
        return <ContactList {...contact} key={key} onClick={() => onContactClick(contact)}/>
    });

    return (
        <div className="row" > {conList} </div>
    );
}

export default ContactListResults;


