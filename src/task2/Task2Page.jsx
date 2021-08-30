import Header from './Header'
import './task2.css'

import { NavLink } from 'react-router-dom'
import Video from './Video'
const Task2Page = () => {
  return (
    <div className="task2-page">
      <Header />
      <NavLink to="/">
        <button className="btn-task-1">Task 1</button>
      </NavLink>
      <Video />
    </div>
  )
}

export default Task2Page
