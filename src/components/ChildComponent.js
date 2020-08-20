import React from 'react';

function ChildComponent(props) {

    return (
        <div>
            {/* <button onClick={props.greetHandler}>Click from ChildComponent</button> */}
            <button onClick={() => props.greetHandler('child 1')} >Click from ChildComponent</button>
        </div>
    )
}

export default ChildComponent