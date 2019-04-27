
/***** REACT *****/
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

/***** STORE *****/
import { connect } from 'react-redux';
import { fetchContact, deleteContact, addMove } from '../../store/actions';

/***** COMPONENTS *****/
import TransferFund from '../../components/TransferFunds/TransferFund.js';
import MoveList from '../../components/MoveList/MoveList.js';

/***** IMGS *****/
import backIcon from '../../assets/img/icons8-left-48.png';
import editIcon from '../../assets/img/icons8-edit-48.png';
import trashIcon from '../../assets/img/icons8-trash-48.png';

class ContactDetails extends Component {

    /***** METHODS *****/
    handleDelete = async () => {
        await this.props.deleteContact(this.props.contact._id);
    }

    transferFund = async (amount) => {
        console.log(this.props.signedUser, 'before');
        await this.props.addMove(this.props.contact, amount);
    }

    /***** LIFECYCLE *****/
    async componentDidMount() {
        const { id } = this.props.match.params;
        await this.props.fetchContact(id);
    }
    render() {
        let { contact } = this.props;
        let { signedUser } = this.props;
        if (contact)
            return (
                <section className="contact-details">
                    <nav className="contact-details-nav">
                        <Link to="/contact">
                            <img src={backIcon} alt="" />
                        </Link>
                        <Link to={`/contact/edit/${contact._id}`}>
                            <img src={editIcon} alt="" />
                        </Link>
                        <Link to="/contact">
                            <img src={trashIcon} onClick={this.handleDelete} alt="" />
                        </Link>
                    </nav>
                    <div className="contact-details-card">
                        <div className="contact-credentials">
                            <p>Name: <label>{contact.name}</label> </p>
                            <p>Phone: <label>{contact.phone}</label></p>
                            <p>Mail: <label>{contact.email}</label></p>
                        </div>
                        <img src={`https://robohash.org/sets=${contact._id}?size=100x100`} alt="" />
                    </div>
                    <TransferFund contact={contact} transferFund={this.transferFund} />
                    <MoveList user={signedUser} contact={contact} />
                </section >
            );
        return <section className="contact-details">Loading...</section>
    };
};

const mapStateToProps = (state) => {
    return {
        signedUser: state.signedUser,
        contact: state.contact
    };
};

export default connect(mapStateToProps,
    { fetchContact, deleteContact, addMove }
)(ContactDetails);




