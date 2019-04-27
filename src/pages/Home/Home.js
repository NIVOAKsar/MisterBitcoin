/***** REACT *****/
import React, { Component } from 'react';

/***** STORE *****/
import { connect } from 'react-redux';
import { getRate } from '../../store/actions';
class HomePage extends Component {
    /***** DATA *****/
    state = {
        rate: 0,
    };

    /***** LIFECYCLE *****/
    async componentDidMount() {
        if (this.props.signedUser) {
            let rate = await this.props.getRate(this.props.signedUser.coins);
            this.setState({ rate });
        }
    };

    render() {
        return (
            <section className="home-page">
                <h1>Mister Bitcoin</h1>
                <div className="home-card wrapper">
                    <h2>Hello {this.props.signedUser && this.props.signedUser.name}!</h2>
                    <p>Coins: {this.props.signedUser && this.props.signedUser.coins}</p>
                    <p>BTC: {this.state.rate > 0 && this.state.rate}</p>
                </div>
            </section>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        signedUser: state.signedUser
    };
};


export default connect(
    mapStateToProps,
    { getRate }
)(HomePage);



