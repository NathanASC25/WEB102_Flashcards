import { useState } from 'react';

const CardDisplay = (props) => {
    
    const [num, setNum] = useState(0);
    
    return (
        <>
            <div className={props.CardIndex}>
                <h1>{props.word}</h1>
            </div>
        </>
    );
};

export default CardDisplay;