import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import * as actionShares from "../actions/shares";
import * as ReactBootStrap from "react-bootstrap"
import { Form, ToggleButton, ButtonGroup } from 'react-bootstrap'
import CurrencyConverter from 'react-currency-conv';

const Shares = (props) => {


    useEffect(() => {
        props.fetchAllShares()
        props.fetchAllSharesCurrentPrices()
    }, [])

    const [radioValue, setRadioValue] = useState('GBP');

    function currencyCoverter(record) {
        //console.log(<CurrencyConverter from={record.currency} to={radioValue} value={record.currentPrice} precision={2}/>)
    }

    const radios = [
        { name: '£', value: 'GBP' },
        { name: '$', value: 'USD' },
        //{ name: 'p', value: 'GBX' },
    ];

    const divStyle = {
        marginTop: '10px',
        marginBottom: '10px',
    };

    return (
        <div>
            {/* <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        type="radio"
                        variant="secondary"
                        name="radio"
                        style={divStyle}
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup> */}
            <ReactBootStrap.Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>CurrentPrice</th>
                        <th>AveragePrice</th>
                        <th>Invested</th>
                        <th>Current Value</th>
                        <th>Return</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.sharesList.map((record, index) => {
                            if (record.currency == 'GBX') {
                                record.currency = 'GBP'
                                record.currentPrice /= 100
                                record.averagePrice /= 100
                                record.invested /= 100
                                record.value /= 100
                                record.return /= 100
                            }

                            return (
                                <tr key={index}>
                                    <td>{record.symbol}</td>
                                    <td>{record.name}</td>
                                    <td>{record.currentPrice}</td>
                                    <td>{record.averagePrice}</td>
                                    <td>{record.invested}</td>
                                    <td>{record.value}</td>
                                    <td>{record.return}</td>
                                    <td>{record.quantity}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </ReactBootStrap.Table>
        </div>
    );
}

// <td><CurrencyConverter from={record.currency} to={radioValue} value={record.currentPrice} precision={2}/></td>
// <td><CurrencyConverter from={record.currency} to={radioValue} value={record.averagePrice} precision={2}/></td>
// <td><CurrencyConverter from={record.currency} to={radioValue} value={record.invested} precision={2}/></td>
// <td><CurrencyConverter from={record.currency} to={radioValue} value={record.value} precision={2}/></td>
// <td><CurrencyConverter from={record.currency} to={radioValue} value={record.return} precision={2}/></td>

const mapStateToProps = state => ({
    sharesList: state.share.list,
})

const mapActionToProps = {
    fetchAllShares: actionShares.fetchAll,
    fetchAllSharesCurrentPrices: actionShares.fetchAllCurrentPrices,
}

export default connect(mapStateToProps, mapActionToProps)(Shares);