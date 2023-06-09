import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewCharacterForm = () => {
  const API_URL = "http://localhost:3000/characters";
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    occupation: "",
    weapon: "",
    cartoon: undefined,
  });

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
      cleanInputs();
      navigate("/");
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

  const { name, weapon, occupation, cartoon } = data;

  return (
    <div>
      <h3>Create new character</h3>
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
    </div>
  );
};

export default NewCharacterForm;
