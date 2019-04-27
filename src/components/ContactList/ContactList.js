
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Components
import ContactPreview from '../ContactPreview/ContactPreview.js';


export default class ContactList extends Component {
    render() {
        const contactList = this.props.contacts.map(contact => (
            <li key={contact._id}>
                <Link className="link" to={`/contact/${contact._id}`}>
                    <ContactPreview
                        contact={contact}
                        deleteContact={this.props.deleteContact}>
                    </ContactPreview>
                </Link>
            </li >
        ));

        return (
            <section className="contact-list">
                <ul>{contactList}</ul>
            </section>
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    heading: PropTypes.string
}
ContactList.defaultProps = {
    contacts: [],
    heading: 'Contacts'
}



