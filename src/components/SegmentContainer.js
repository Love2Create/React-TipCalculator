import './SegmentContainer.css';

const SegmentContainer = (props) => {

    const classes = "segmentContainer " + props.className;

    return(
        <div className={classes}>
            {props.children}
        </div>
    );

}

export default SegmentContainer;