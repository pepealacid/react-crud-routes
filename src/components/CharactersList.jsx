import axios from "axios";
import { useState, useEffect } from "react";
import Character from "./Character";

const API_URL = "http://localhost:8000/characters";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [data, setData] = useState({
    name: "",
    occupation: "",
    weapon: "",
    cartoon: undefined,
  });

  const getData = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data);
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
      return <Character key={character.id} handleEdit={handleEdit} handleDelete={handleDelete} {...character} />;
    });
  };

  const cleanInputs = () => {
    setData({
      name: "",
      occupation: "",
      weapon: "",
      cartoon: undefined,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, data);
      getData();
      cleanInputs();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = async (id, data) => {
    try {
        await axios.put(`${API_URL}/${id}`, data);
        getData();
    } catch (error) {
        console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  }

  const { name, weapon, occupation, cartoon } = data;

  return (
    <div>
      <h3>CharactersList</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <label htmlFor="occupation">Occupation:</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={occupation}
          onChange={handleChange}
        />

        <label htmlFor="weapon">Weapon:</label>
        <input
          type="text"
          id="weapon"
          name="weapon"
          value={weapon}
          onChange={handleChange}
        />

        <label htmlFor="cartoon">Cartoon:</label>
        <select
          id="cartoon"
          name="cartoon"
          value={cartoon}
          onChange={handleChange}
        >
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {characters.length ? displayCharacters() : <p>No data avaiable</p>}
    </div>
  );
};

export default CharactersList;
