const RightButton = (props) => {
    return (
        <>
            <button onClick={props.clickFunction} id={props.idChoice}>→</button>
        </>
    );
};

export default RightButton;