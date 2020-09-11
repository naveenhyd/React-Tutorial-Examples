import React from 'react';

function Person({ person }) {
    console.log(person)
    return (
        <h2>I am {person.name} with skills {person.skills}</h2>
    )
}

export default Person;