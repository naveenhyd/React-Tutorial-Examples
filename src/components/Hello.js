import React from 'react';

const Hello = () => {

    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Naveen</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:'dummyid',className:'dummyClass'},
        React.createElement('h1', null, 'naveen22')
    );
}

export default Hello;