import React, {useEffect} from 'react';
import { connect } from "react-redux";
import * as actionsOptions from "../actions/option";
import * as ReactBootStrap from "react-bootstrap"

const Options = (props) => {


    useEffect(() => {
        props.fetchAllOptions()
    }, [])

   

    return ( 
    <div><ReactBootStrap.Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Symbol</th>
        <th>Type</th>
        <th>Details</th>
        <th>Start Date</th>
        <th>Expiry Date</th>
        <th>Strike Price</th>
        <th>Stock Price @ Sale</th>
        <th>Avg. Price</th>
        <th>Commission</th>
        <th>Profit</th>
      </tr>
    </thead>
    <tbody>
        {
        props.optionsList.map((record, index) => {
            return (
                <tr key={index}>
                    <td>{record.symbol}</td>
                    <td>{record.type}</td>
                    <td>{record.details}</td>
                    <td>{record.startDate}</td>
                    <td>{record.expiryDate}</td>
                    <td>${record.strikePrice}</td>
                    <td>${record.stockPriceAtSale}</td>
                    <td>${record.averagePrice}</td>
                    <td>${record.commission}</td>
                    <td>${record.profit}</td>
                </tr>

            )
        })
        }
        </tbody>
  </ReactBootStrap.Table>
  </div>
        );
}

const mapStateToProps = state => ({
        optionsList:state.option.list,
})

const mapActionToProps = {
    fetchAllOptions: actionsOptions.fetchAll,
}
 
export default connect(mapStateToProps, mapActionToProps)(Options);