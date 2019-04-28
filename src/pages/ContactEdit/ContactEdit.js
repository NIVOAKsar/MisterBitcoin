
/***** REACT *****/
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

/***** STORE *****/
import { connect } from 'react-redux';
import { fetchContact, saveContact, getEmptyContact } from '../../store/actions';

/***** IMGS *****/
import backIcon from '../../assets/img/icons8-left-48.png';
import editIcon from '../../assets/img/icons8-edit-48.png';
import trashIcon from '../../assets/img/icons8-trash-48.png';
class ContactEditPage extends Component {

    /***** DATA *****/
    state = {
        contact: this.props.getEmptyContact(),
        header: ''
    }

    /***** METHODS *****/
    handleInput = (ev) => {
        let newContact = { ...this.state.contact };
        newContact[ev.target.name] = ev.target.value;
        this.setState({ contact: newContact });
    }

    handleSubmit = async (ev) => {
        ev.preventDefault();
        this.props.saveContact(this.state.contact);
        this.props.history.push(`/contact/${this.state.contact._id}`);
    }

    /***** LIFECYCLE *****/
    async componentDidMount() {
        const { id } = this.props.match.params;
        if (id) {
            await this.props.fetchContact(id);
            let contact = JSON.parse(JSON.stringify(this.props.contact));
            this.setState({
                header: 'Edit Contact',
                contact: contact
            })
        }
        else {
            this.setState({
                header: 'Add Contact',
            });
        }
    }
    render() {
        return (
            <section className="contact-edit">
                <nav className="contact-details-nav">
                    <Link to={`/contact/${this.state.contact._id}`}>
                        <img src={backIcon} alt="" />
                    </Link>
                </nav>
                <div className="contact-edit-card">
                    <img src={this.state.contact && `https://robohash.org/sets=${this.state.contact._id}?size=100x100`} alt="" />
                    <form onSubmit={this.handleSubmit}>
                        <p>Name: <input type="text" data-key="name" name="name" value={this.state.contact.name} onChange={this.handleInput} /></p>
                        <p>Mail: <input type="text" data-key="email" name="email" value={this.state.contact.email} onChange={this.handleInput} /></p>
                        <p>Phone: <input type="text" data-key="phone" name="phone" value={this.state.contact.phone} onChange={this.handleInput} /></p>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </section >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact
    };
};


export default connect(mapStateToProps,
    { fetchContact, saveContact, getEmptyContact }
)(ContactEditPage);



