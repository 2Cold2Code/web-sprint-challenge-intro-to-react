import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap'
import './App.css';
import axios from 'axios';
import Character from './components/Character';

function show(stuff, ...moreStuff){
  console.log(stuff, ...moreStuff)
}
show('this is process: ', process)
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const subapi = {
    characters: 'people/',
    starships: 'starships/',
    vehicles: 'vehicles/'
  }
  const api = 'https://swapi.dev/api';
  const lineup = null;
  const charApi = `https://swapi.dev/api/${subapi.characters}${lineup}`
  const [name, setName]  = useState('')
  const [gender, setGender] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [height, setHeight] = useState('');
  const [mass, setMass] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [species, setSpecies] = useState('');
  const [previous, setPrevious] = useState('')
  const [next, setNext] = useState('');

  useEffect(
  () => {
    axios.get(`${api}/${subapi.characters}`)
         .then(r => {
           console.log(r)
           const {results} = r.data;

           show(results)

           results.map(character => {
             const {name, gender, birth_year, height, mass, hair_color, species} = results;
             const birthYear = birth_year;
             const hairColor = hair_color;
              setName(character.name); 
              
              setGender(character.gender);
              
              setBirthYear(character.birth_year); 
              
              setHeight(character.height); 
              
              setMass(character.mass); 
              
              setHairColor(character.hair_color); 
              
              setSpecies(character.species);
              
              return character
            })
        })
         .catch(e => console.log(e))
  }, []
)
  useEffect(
    () => {
      axios.get(charApi)
      .then( r => {
      setNext(`${r.data.next}`)
      setPrevious(r.data.previous)
      
              setPrevious(r.data.previous)
              
      })
    }, [subapi.characters]
  )
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Button color={'primary'} block>Previous</Button>
      <Character 
        name={name} 
        gender={gender}
        birthYear={birthYear}
        height={height}
        mass={mass}
        hairColor={hairColor}
        species={species}
      />
      <Button color='primary' size='lg' onClick={()=>{
         subapi.characters = setNext(next);
      }} block>Next</Button>
    </div>
  );
}

export default App;
