/***** REACT *****/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/***** STORE *****/
import { connect } from 'react-redux';
import { fetchContacts, deleteContact } from '../../store/actions';

/***** COMPONENTS *****/
import ContactList from '../../components/ContactList/ContactList.js';
import ContactFilter from '../../components/ContactFilter/ContactFilter.js';

/***** IMGS *****/
import add from '../../assets/img/icons8-add-48.png';

class ContactPage extends Component {

    /***** METHODS *****/
    filter = async (filterBy) => {
        await this.props.fetchContacts(filterBy);
    }

    deleteContact = async (targetId) => {
        await this.props.deleteContact(targetId);
    }

    /***** LIFECYCLE *****/
    async componentDidMount() {
        await this.props.fetchContacts();
    }

    render() {
        return (
            <section className="contact-page">
                <h1>Contacts</h1>
                <div className="contact-header-container">
                    <Link to="/contact/edit">
                        <img className="add-contact-btn" src={add} alt="" />
                    </Link>
                    <ContactFilter
                        filter={this.filter}>
                    </ContactFilter>
                </div>
                <ContactList
                    contacts={this.props.contacts}
                    deleteContact={this.deleteContact}>
                </ContactList>
            </section >
        );
    };
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    };
};

export default connect(
    mapStateToProps,
    { fetchContacts, deleteContact }
)(ContactPage);




