import { Route, Routes } from 'react-router'
import './App.css'

import HomePage from './task1/HomePage'

import Task2Page from './task2/Task2Page'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task2" element={<Task2Page />} />
      </Routes>
    </div>
  )
}

export default App
