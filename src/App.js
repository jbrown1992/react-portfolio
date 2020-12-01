import React from 'react';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Options from './components/Options';
import OptionForm from './components/OptionForm';
import TotalProfit from './components/TotalProfit';
import AnnualReturn from './components/AnnualReturn';
import Shares from './components/Shares'
import Selector from './components/Selector'

function App() {
  return (
    <Provider store = {store}>
      <TotalProfit />
      <AnnualReturn />
      <Selector />
    </Provider>
    
  );
}

export default App;
