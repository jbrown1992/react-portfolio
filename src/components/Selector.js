import React, { useState } from 'react';
import Options from './Options';
import OptionForm from './OptionForm';
import Shares from './Shares'

const Selector = () => {

    const [selection, setSelection] = useState(0);
    return (
        <div>
            <button onClick={() => setSelection('shares')}>Shares</button>
            <button onClick={() => setSelection('options')}>Options</button>
            {selection === 'shares' && (
                <div>
                    <Shares />
                </div>)}

            {selection === 'options' && (
                <div>
                    <OptionForm />
                    <Options />
                </div>)}


        </div>

    )
}


export default Selector;