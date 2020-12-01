import React from 'react';
import { connect } from "react-redux";
import { financial } from "../utils/financials";

const TotalProfit = (props) => {

    let profit = 0;
    props.optionsList.forEach(element => {
        profit += element.profit;
    });


    return ( 
        <div>Total Profit - ${financial(profit)}
        </div>
       );
}

const mapStateToProps = state => ({
    optionsList:state.option.list
})
 
export default connect(mapStateToProps)(TotalProfit);