import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CharacterDetails from './components/CharacterDetails'
import NewCharacterForm from './pages/NewCharacterForm'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/characters/:id" element={ <CharacterDetails />} />
        <Route path="/new-character" element={ <NewCharacterForm /> } />
      </Routes>
    </div>
  )
}

export default App
