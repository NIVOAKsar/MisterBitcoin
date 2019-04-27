
/***** REACT *****/
import React, { Component } from 'react';

/***** DEPEND *****/
import moment from 'moment';


class MoveList extends Component {
    getMoves = () => {
        let { user, contact } = this.props;
        let moves = user.moves.filter(move => move.to === contact.name).map(move => (
            <div key={move._id} className="move-container">
                <div className="move-card">
                    <p>At: {moment(move.at).format('LLLL')} </p>
                    <p>Amount: {move.amount} </p>
                </div>
            </div>
        ));
        return moves;
    }

    render() {
        return (
            <section className="move-list">
                <h3>Transactions</h3>
                <hr />
                <div>{this.getMoves()}</div>
            </section >
        )
    }
}

export default MoveList;



