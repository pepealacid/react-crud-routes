import './App.css'
import CharactersList from './components/CharactersList'
import React from 'react';

function App() {
  return (
    <React.StrictMode>
    <div className='container'>
        <CharactersList />
    </div>
    </React.StrictMode>
  )
}

export default App
