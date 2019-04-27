
/***** REACT *****/
import React, { Component } from 'react';

/***** STORE *****/
import { connect } from 'react-redux';
import { getMarketPrice, getConfirmedTransactions } from '../../store/actions';

/***** COMPONENTS *****/
import Chart from '../../components/Chart/Chart.js';

class StatisticPage extends Component {
    state = {
        marketPriceData: [],
        marketPriceName: '',
        transactionsData: [],
        transactionsName: ''
    }
    async componentWillMount() {
        let marketData = await this.props.getMarketPrice();
        this.setState({ marketPriceData: marketData.data.values.map(data => data.y) });
        this.setState({ marketPriceName: marketData.data.name });

        let transData = await this.props.getConfirmedTransactions();
        this.setState({ transactionsData: transData.data.values.map(data => data.y) });
        this.setState({ transactionsName: transData.data.name });

    }
    render() {
        let marketData = this.state.marketPriceData;
        let marketName = this.state.marketPriceName;
        let transData = this.state.transactionsData;
        let transName = this.state.transactionsName;
        return (
            <section className="statistics">
                <h1>Statistics Page</h1>
                <Chart
                    chartData={marketData && marketData}
                    chartName={marketName && marketName}>
                </Chart>
                <Chart
                    chartData={transData && transData}
                    chartName={transName && transName}>
                </Chart>
            </section >
        )
    }
}


export default connect(null,
    { getMarketPrice, getConfirmedTransactions }
)(StatisticPage);




