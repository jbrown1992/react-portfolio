import React from 'react';
import { connect } from "react-redux";
import { financial } from "../utils/financials";

const AnnualReturn = (props) => {

    let annualReturn = 0;
    let startDate = null;
    let diffDays = 0;

    if (props.optionsList.length > 0) {
        let firstDate = props.optionsList[0].startDate;
        var today = new Date();
        startDate = new Date(firstDate)
        const diffTime = Math.abs(today - startDate);
        diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        annualReturn = calcAnnualReturn();
    }

    let profit = 0;
    props.optionsList.forEach(element => {
        profit += element.profit;
    });

    function calcAnnualReturn() {
        //return  (1+0.1744)^(365/diffDays)-1;
        var first = (1+0.1744)
        var second = (365/diffDays)
        return (Math.pow(first, second)-1)*100;
    }



    return (
        <div>Annual Return - {annualReturn.toFixed(2)}%
        </div>
    );


}



const mapStateToProps = state => ({
    optionsList: state.option.list
})

export default connect(mapStateToProps)(AnnualReturn);