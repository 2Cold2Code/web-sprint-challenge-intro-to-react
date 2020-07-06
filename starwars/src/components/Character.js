import React from "react";
import {Sections} from '../styles/section_style';
import {H2} from '../styles/h2_style'

// Write your Character component here
export default function Character(props) {
  const { name, gender, birthYear, height, mass, hairColor, species } = props;
  
  return (
    <Sections
      hght={"hght"}
      bGColor={"bGColor"}
      direction={"direction"}
      jC={"jC"}
      aI={"aI"}
    >
      <H2
        wth={"wth"}
        hght={"hght"}
        bgColor={"bgColor"}
        direction={"direction"}
        jC={"jC"}
        aI={"aI"}
        color={'color'}
        className="name"
      >
        Name: {name}
      </H2>
      <p className="gender">Gender: {gender}</p>
      <p className="birth-year">Birth Year: {birthYear}</p>
      <p className="height">Height: {height}</p>
      <p className="mass">Mass: {mass}</p>
      <p className="hair-color">Hair Color: {hairColor}</p>
      <p className="species">Species: {species}</p>
    </Sections>
  );
}
