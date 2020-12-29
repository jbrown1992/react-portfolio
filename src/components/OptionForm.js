import React, { useState, useEffect } from 'react';
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/option";
import * as typeActions from "../actions/type";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { Form, Button } from 'react-bootstrap'


const initialFieldValues = {
    symbol: '',
    details: '',
    strikePrice: '',
    stockPriceAtSale: '',
    startDate: '',
    expiryDate: '',
    averagePrice: '',
    commission: '',
    profit: '',
    type: ''
}

const OptionForm = (props) => {

    useEffect(() => {
        props.getTypes()
    }, [])

    useEffect(() => {
       if(props.currentId != 0)
       setValues({
           ...props.optionList.find(x => x.id===props.currentId)
       })
    }, [props.currentId])


    const validate = () => {
        let temp = {}
        temp.symbol = values.symbol ? "" : "This Field is required"
        temp.details = values.details ? "" : "This Field is required"
        temp.strikePrice = values.strikePrice ? "" : "This Field is required"
        temp.stockPriceAtSale = values.stockPriceAtSale ? "" : "This Field is required"
        temp.averagePrice = values.averagePrice ? "" : "This Field is required"
        temp.comission = values.commission ? "" : "This Field is required"
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        handleInputChangeDate
    } = useForm(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault();
        //if (validate()) {
            console.log(`Current Id ${props.currentId}`)
            console.log(values)
            if (props.currentId == 0) 
            props.createOption(values)
            else
            props.updateOption(props.currentId, values)
        //}
    }

    const [startSelectedDate, setStartSelectedDate] = useState(null)
    const [expirySelectedDate, setExpirySelectedDate] = useState(null)
    const typeDropdown = ['CALL', 'PUT', 'SHARES']


    return (<form onSubmit={handleSubmit}>
        <input type="text" placeholder="Symbol" name="symbol" value={values.symbol} onChange={handleInputChange} {...(errors.symbol && { errors: true, helperText: errors.symbol })} />
        <select name="type" value={values.type} onChange={handleInputChange}>
            <option value="" selected>Type</option>
            {props.typeList.map((item) => (
                <option value={item.name}> {item.name} </option>
            ))}
        </select>
        <input type="text" placeholder="Details" name="details" value={values.details} onChange={handleInputChange} {...(errors.details && { errors: true, helperText: errors.details })} />
        <DatePicker placeholderText="Start Date" value={values.startDate} selected={startSelectedDate} onChange={date => { setStartSelectedDate(date); handleInputChangeDate('startDate', date) }} />
        <DatePicker placeholderText="Expiry Date" value={values.expiryDate} selected={expirySelectedDate} minDate={startSelectedDate} onChange={date => { setExpirySelectedDate(date); handleInputChangeDate('expiryDate', date) }} />
        <input type="text" placeholder="Strike Price" name="strikePrice" value={values.strikePrice} onChange={handleInputChange} {...(errors.strikePrice && { errors: true, helperText: errors.strikePrice })} />
        <input type="text" placeholder="Price @ Sale" name="stockPriceAtSale" value={values.stockPriceAtSale} onChange={handleInputChange} {...(errors.stockPriceAtSale && { errors: true, helperText: errors.stockPriceAtSale })} />
        <input type="text" placeholder="Avg. Price" name="averagePrice" value={values.averagePrice} onChange={handleInputChange} {...(errors.averagePrice && { errors: true, helperText: errors.averagePrice })} />
        <input type="text" placeholder="Commission" name="commission" value={values.commission} onChange={handleInputChange} {...(errors.commission && { errors: true, helperText: errors.commission })} />
        <input type="submit" />
    </form>

    );

}

const mapStateToProps = state => ({
    optionList: state.option.list,
    typeList: state.type.list,

})

const mapActionToProps = {
    createOption: actions.create,
    updateOption: actions.update,
    getOptions: actions.fetchAll,
    getTypes: typeActions.fetchAll,

}

export default connect(mapStateToProps, mapActionToProps)(OptionForm);