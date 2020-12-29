import React from 'react';
import { connect } from "react-redux";
import { financial } from "../utils/financials";

const Return = (props) => {

    let profit = 0;
    props.optionsList.forEach(element => {
        profit += element.profit;
    });


    return ( <div>
        Return % - {((profit/1000)*100).toFixed(2)}%
    </div> );
}
 



const mapStateToProps = state => ({
    optionsList: state.option.list
})

export default connect(mapStateToProps)(Return);