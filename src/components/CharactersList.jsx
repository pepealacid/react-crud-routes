import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const API_URL = "http://localhost:3000/characters";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(API_URL);
      setCharacters(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const displayCharacters = () => {
    return characters.map((character) => {
      return (
        <div key={character.id} className="character-card">
          <h4>{character.name}</h4>
          <Link to={`/characters/${character.id}`}>Details</Link>
        </div>
      );
    });
  };
  


  return (
    <div>
      <h3>CharactersList</h3>
      
      {characters.length ? displayCharacters() : <p>No data avaiable</p>}
    </div>
  );
};

export default CharactersList;
