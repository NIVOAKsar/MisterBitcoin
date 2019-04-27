
/***** REACT *****/
import React, { Component } from 'react';
export default class TransferFund extends Component {
    /***** DATA *****/
    state = {
        amount: 0,
    }

    /***** METHODS *****/
    handleInput = (ev) => {
        this.setState({ amount: ev.target.value });
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        let amount = parseFloat(this.state.amount);
        if (amount) {
            this.props.transferFund(amount);
            this.setState({ amount: 0 })
        }
    }

    /***** LIFECYCLE *****/
    render() {
        return (
            <section className="transfer-funds">
                <h4>Commit Transaction</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Amount:
                        <br />
                        <input type="number"
                            name="amountInput"
                            min="0"
                            value={this.state.amount} onChange={this.handleInput} />
                    </label>
                    <br />
                    <input type="submit" value="Transfer" />
                </form>
            </section >
        )
    }
}




