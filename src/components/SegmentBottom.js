import { useState } from 'react';
import SegmentContainer from './SegmentContainer';
import './SegmentContainer.css';

const SegmentBottom = () => {

    const [enteredSplitNum, setEnteredSplitNum] = useState(1);

    const splitChangeHandler = (e) => {
        setEnteredSplitNum(e.target.value);
    }

    return (
        <SegmentContainer>
            <div className="spaceBetween">
                <div>Split:</div>
                <div>{enteredSplitNum} {enteredSplitNum>1 ? "people" : "person"}</div>
            </div>
            <div>
                <input type="range" min="1" max="10" value={enteredSplitNum} onChange={splitChangeHandler} />
            </div>
            <div className="spaceBetween">
                <div>Bill Each: </div>
                <div>$?</div>
            </div>
        </SegmentContainer>
    );

};

export default SegmentBottom;