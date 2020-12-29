import React, { useState } from 'react';
import Options from './Options';
import OptionForm from './OptionForm';
import Shares from './Shares'
import { Button } from 'react-bootstrap'

const Selector = () => {

    const divStyle = {
        marginLeft: '10px',
        marginTop: '10px',
        marginBottom: '10px',
        variant: "dark"
      };
      
      
    const [selection, setSelection] = useState(0);
    return (
        <div>
            <Button onClick={() => setSelection('shares')}  variant="dark" style={divStyle}>Shares</Button>
            <Button onClick={() => setSelection('options')}  variant="dark" style={divStyle}>Options</Button>

            {selection === 'shares' && (
                <div>
                    <Shares />
                </div>)}

            {selection === 'options' && (
                <div>
                    
                    <Options />
                </div>)}

                {selection === 'optionsForm' && (
                <div>
                    {/* <OptionForm /> */}
                </div>)}

        </div>

    )
}


export default Selector;