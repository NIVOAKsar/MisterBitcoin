/***** REACT *****/
import React, { Component } from 'react';

class ContactFilter extends Component {
    state = {
        filterBy: { term: '' }
    };

    handleInput = (ev) => {
        let filterBy = { term: ev.target.value };
        this.props.filter(filterBy);
    }

    render() {
        return (
            <section className="contact-filter">
                <input
                    type="text"
                    placeholder="Search Contact"
                    onChange={this.handleInput} />
            </section>
        );
    };
};

export default ContactFilter;




