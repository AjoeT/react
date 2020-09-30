import React from 'react'

function ListRendering() {
    const names = ['Ajoe', 'Ajo', 'Achu']
    const persons = [
        {
            id: 1,
            name: 'Ajoe',
            skill: 'Java'
        },
        {
            id: 2,
            name: 'Ajo',
            skill: 'JavaScript'
        },
        {
            id: 3,
            name: 'Achu',
            skill: 'React'
        }
    ]
    const nameList = names.map(name => <h1 key={name}>{name}</h1>) // Key prop for list rendering
    const personList = persons.map(person => <h1 key ={person.id}>My name is {person.name}. I know {person.skill}.</h1>)
    return (
        <div>
            <p>NameList</p>
            {nameList}
            <p>Persons List</p>
            {personList}
        </div>
    )
}

export default ListRendering
