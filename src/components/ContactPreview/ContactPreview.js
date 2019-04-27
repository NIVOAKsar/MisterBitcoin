
/***** DEPENDS *****/
import React, { Component } from 'react';

export default class ContactPreview extends Component {

    handleClick = async (ev) => {
        ev.preventDefault();
        this.props.deleteContact(this.props.contact._id);
    }
    render() {
        const contact = this.props.contact;
        return (
            <section className="contact-preview">
                <img src={`https://robohash.org/sets=${contact._id}?size=100x100`} alt="" />
                {contact.name}
                <button className="delete-contact-btn" onClick={this.handleClick}>	&times;</button>
            </section>
        )
    }
}




