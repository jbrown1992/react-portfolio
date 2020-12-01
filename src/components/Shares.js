import React, {useEffect} from 'react';
import { connect } from "react-redux";
import * as actionShares from "../actions/shares";
import * as ReactBootStrap from "react-bootstrap"

const Shares = (props) => {


    useEffect(() => {
        props.fetchAllShares()
    }, [])

   

    return ( 
    <div><ReactBootStrap.Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Symbol</th>
        <th>Name</th>
        <th>CurrentPrice</th>
        <th>AveragePrice</th>
        <th>Exchange</th>
        <th>Return</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
        {
        props.sharesList.map((record, index) => {
            return (
                <tr key={index}>
                    <td>{record.symbol}</td>
                    <td>{record.name}</td>
                    <td>{record.currentPrice}</td>
                    <td>{record.averagePrice}</td>
                    <td>{record.exchange}</td>
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

const mapStateToProps = state => ({
        sharesList:state.share.list,
})

const mapActionToProps = {
    fetchAllShares: actionShares.fetchAll,
}
 
export default connect(mapStateToProps, mapActionToProps)(Shares);