import React from 'react';
import Person from './Person';

function NameList() {

    // const names = ['naveen', 'aaa', 'bbb']

    const persons = [{
        "id": 1,
        "name": "Scotti",
        "skills": "MCSA + Messaging"
    }, {
        "id": 2,
        "name": "Tildy",
        "skills": "HDI Support Center Analyst"
    }, {
        "id": 3,
        "name": "Neron",
        "skills": "MCS"
    }, {
        "id": 4,
        "name": "Jamison",
        "skills": "Xactimate"
    }, {
        "id": 5,
        "name": "Letty",
        "skills": "Web Development"
    }]

    // return (
    //     <div>
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )

    const PersonsList = persons.map(personData => (
        <Person key={personData.id} person={personData}></Person>
    ))
    return <div>{PersonsList}</div>
}

export default NameList;