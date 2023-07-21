  import React, { useRef } from "react";
  import { Link } from "react-router-dom";
  import ContactCard from "./ContactCard";

  const ContactList = (props) => {
    console.log(props);

    const inputEl = useRef("");

    const deleteConactHandler = (id) => {
      if (window.confirm("Are you sure you want to delete this contact?")) {
        props.getContactId(id);
      }
    };

    const renderContactList = props.contacts.map((contact) => {
      return (
        <ContactCard
          contact={contact}
          clickHander={deleteConactHandler}
          key={contact.id}
        />
      );
    });

    const getSearchTerm = () => {
      props.searchKeyword(inputEl.current.value);
    };

    return (
      <div className="main">
        <h2 className="center-div">
          Contact List </h2>
          <div className="center-div">
          <Link to="/add">
            <button className="ui button blue right">Add Contact</button>
          </Link>
          </div>
          <div className="ui search">
            <div className="ui icon input">
              <input ref = { inputEl }
              type="text" placeholder="Search Contact" className="prompt" value={ props.term } onChange={ getSearchTerm } />
              <i className="search icon"></i>
            </div>
          </div>
        <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No such Contacts"}</div>
      </div>
    );
  };

  export default ContactList;
