import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

function show(stuff, ...moreStuff){
  console.log(stuff, ...moreStuff)
}

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const api = 'https://swapi.dev/api';
  const subapi = {
    characters: 'people/',
    starships: 'starships/',
    vehicles: 'vehicles/'
  }

  const [name, setName]  = useState()
  const [gender, setGender] = useState();
  const [birthYear, setBirthYear] = useState();
  const [height, setHeight] = useState();
  const [mass, setMass] = useState();
  const [hairColor, setHairColor] = useState();
  const [species, setSpecies] = useState();

  useEffect(
  () => {
    axios.get(`${api}/${subapi.characters}`)
         .then(r => {
           console.log(r)
           const {results} = r.data;
           results.map(character => {
              setName(character.name); 
              show('name: ', name);
              setGender(character.gender); 
              show('gender: ', gender)
              setBirthYear(character.birth_year); 
              show('birthYear: ', birthYear)
              setHeight(character.height); 
              show('height: ', height)
              setMass(character.mass); 
              show('mass: ', mass)
              setHairColor(character.hair_color); 
              show('hairColor: ', hairColor)
              setSpecies(character.species)
              show('species: ', species)
            })
        })
         .catch(e => console.log(e))
  }, []
)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character 
        name={name} 
        gender={gender}
        birthYear={birthYear}
        height={height}
        mass={mass}
        hairColor={hairColor}
        species={species}
      />
    </div>
  );
}

export default App;
