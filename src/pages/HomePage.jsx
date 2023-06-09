import CharactersList from "../components/CharactersList"
import { Link } from "react-router-dom"

const HomePage = () => {
    return(
        <div>
            <h3>HomePage</h3>
            <Link to="/new-character">Create new character</Link>
            <CharactersList />
        </div>
    )
}

export default HomePage