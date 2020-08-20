import React from 'react';

// const FunctionClick = () => {

//     function handlerClick() {
//         console.log('handler click');
//     }

//     return (
//         <button onClick={handlerClick()}>Click</button>
//     )
// }


function FunctionClick() {

    function handlerClick() {
        console.log('handler click 2')
    }

    return (
        <button onClick={handlerClick}>Click 2</button>
    )
}

export default FunctionClick;