import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/characters";

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    name: "",
    weapon: "",
    occupation: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setCharacter(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleEdit = async (id, data) => {
    try {
      await axios.put(`${API_URL}/${id}`, data);
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(id, data);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {character ? (
        isEditing ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />

            <label htmlFor="occupation">Occupation:</label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={data.occupation}
              onChange={handleChange}
            />

            <label htmlFor="weapon">Weapon:</label>
            <input
              type="text"
              id="weapon"
              name="weapon"
              value={data.weapon}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <h1>Name: {character.name}</h1>
            <p>Occupation: {character.occupation}</p>
            <p>Weapon: {character.weapon}</p>
            <button onClick={() => setIsEditing(true)}>✏️</button>
            <button onClick={() => handleDelete(id)}>🗑</button>
            <Link to="/">Back to home</Link>
          </div>
        )
      ) : (
        <p>Loading character details...</p>
      )}
    </div>
  );
};

export default CharacterDetails;
