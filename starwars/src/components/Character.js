import React from 'react';
// Write your Character component here
export default function Character(props){
  const {name, gender, birthYear, height, mass, hairColor, species} = props;

        return (
            <div>
                <h2 className='name'>{name}</h2>
                <p className='gender'>{gender}</p>
                <p className='birth-year'>{birthYear}</p>
                <p className='height'>{height}</p>
                <p className='mass'>{mass}</p>
                <p className='hair-color'>{hairColor}</p>
                <p className='species'>{species}</p>
            </div>
        )
}