import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import * as actionsOptions from "../actions/option";
import { ButtonGroup, Button, Table } from "react-bootstrap"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import OptionForm from './OptionForm';

const Options = (props) => {


    useEffect(() => {
        props.fetchAllOptions()
    }, [])

   const [currentId, setCurrentId] = useState(0);

   function editOption(record) {
    setCurrentId(record.id)
    window.scrollTo(0, 0)
   }

   const deleteOption =  record => {
       if(window.confirm('Are you sure you want to delete this record?')){
        props.deleteOption(record.id)
       }    
   }
    return ( 
    <div>
        <OptionForm {...({currentId, setCurrentId})}/>
        <Table striped bordered hover variant="dark">
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
        <th></th>
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
                    <td>
                        <ButtonGroup variant="text">
                            <Button variant="secondary"><EditIcon color="action" onClick ={() => {editOption(record)}}></EditIcon></Button>
                            <Button variant="secondary"><DeleteIcon color="secondary" onClick ={() => deleteOption(record)}></DeleteIcon></Button>
                            </ButtonGroup>
                    </td>
                </tr>

            )
        })
        }
        </tbody>
  </Table>
  </div>
        );
}

const mapStateToProps = state => ({
        optionsList:state.option.list,
})

const mapActionToProps = {
    fetchAllOptions: actionsOptions.fetchAll,
    deleteOption: actionsOptions.Delete,
}
 
export default connect(mapStateToProps, mapActionToProps)(Options);