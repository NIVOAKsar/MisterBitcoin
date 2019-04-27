import axios from 'axios';
import UtilService from './UtilService.js';

const MARKET_KEY = 'MARKET';
const TRANSACTIONS_KEY = 'TRANSACTIONS';


function getRate(coins) {
    return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        .then(rate => Promise.resolve(rate.data))
}

function getMarketPrice() {
    if (UtilService.loadFromStorage(MARKET_KEY)) {
        return Promise.resolve(UtilService.loadFromStorage(MARKET_KEY));
    }
    else {
        const api = `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`;
        return axios.get(api)
            .then(stats => {
                UtilService.saveToStorage(MARKET_KEY, stats);
                return stats;
            });
    }
}

function getConfirmedTransactions() {
    if (UtilService.loadFromStorage(TRANSACTIONS_KEY)) {
        return Promise.resolve(UtilService.loadFromStorage(TRANSACTIONS_KEY));
    }
    else {
        const api = `https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true`;
        return axios.get(api)
            .then(stats => {
                UtilService.saveToStorage(TRANSACTIONS_KEY, stats);
                return stats;
            });
    }
}

export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
}