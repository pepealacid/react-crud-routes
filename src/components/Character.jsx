import { useState } from 'react'

const API_URL = "http://localhost:8000/characters"

const Character = ({ id, name, occupation, weapon, cartoon, handleEdit, handleDelete }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [data, setData] = useState({
        name,
        occupation,
        weapon,
        cartoon
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit(id, data);
        setIsEditing(false)
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="character-card">
            {isEditing ? (
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

                    <label htmlFor="cartoon">Cartoon:</label>
                    <select
                        id="cartoon"
                        name="cartoon"
                        value={data.cartoon}
                        onChange={handleChange}
                    >
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>

                    <button type="submit">Submit</button>
                </form>
            ) : (
                <>
                    <p>Name: {name}</p>
                    <p>Occupation: {occupation}</p>
                    <p>Weapon: {weapon}</p>
                </>
            )}
            <button onClick={()=>{handleDelete(id)}}>🗑</button>
            <button onClick={()=>{setIsEditing(!isEditing)}}>✏️</button>
        </div>
    )
}

export default Character