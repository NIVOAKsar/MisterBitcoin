/***** REACT *****/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/***** STORE *****/
import { connect } from 'react-redux';
import { signUp } from '../../store/actions';

/***** IMGS *****/
import bitcoin from '../../assets/img/bitcoin.png';


class SignupPage extends Component {

    state = {
        username: '',
    };

    handleInput = (ev) => {
        this.setState({ username: ev.target.value });
    }

    handleSubmit = async () => {
        await this.props.signUp(this.state.username);
        this.props.history.push('/')
    }

    render() {
        return (
            <section className="signup-page">
                <img width="200" height="200" src={bitcoin} alt="" />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Username" onChange={this.handleInput} />
                    <input type="submit" value="Submit" />
                </form>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signedUser: state.signedUser
    };
};


export default connect(
    mapStateToProps,
    { signUp }
)(withRouter(SignupPage));



