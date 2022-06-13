import { useState } from 'react';
import './SegmentTop.css';
import SegmentContainer from './SegmentContainer';

const SegmentTop = () => {

    const [enteredBillTotal, setEnteredBillTotal] = useState(0);
    const [enteredTipPercentage, setEnteredTipPercentage] = useState(0); 

    const billTotalHandler = (e) => {
        setEnteredBillTotal(e.target.value);
    };

    const tipPercentageHandler = (e) => {
        console.log(e.target.value)
        setEnteredTipPercentage(e.target.value);
    };

    return(
        <SegmentContainer className="segment-container">
            <div className="spaceBetween">
                <label htmlFor="bill">Bill: ${enteredBillTotal}</label>
                <input type="number" id="bill" step="0.01" value={enteredBillTotal} onChange={billTotalHandler} />
            </div>
            <div className="spaceBetween">
                <div>Select Tip:</div>
                <div>{enteredTipPercentage}%</div>
            </div>
            <div>
                <input type="range" min="0" max="100" value={enteredTipPercentage} onChange={tipPercentageHandler}/>
            </div>
            <div className="spaceBetween">
                <div>Tip</div>
                <div>${(Number(enteredBillTotal)*(Number(enteredTipPercentage)/100)).toFixed(2)}</div>
            </div>
            <hr></hr>
            <div className="spaceBetween result">
                <div>Total:</div>
                <div>${((Number(enteredBillTotal)*(Number(enteredTipPercentage)/100))+Number(enteredBillTotal)).toFixed(2)}</div>
            </div>
        </SegmentContainer>
    );
};

export default SegmentTop;