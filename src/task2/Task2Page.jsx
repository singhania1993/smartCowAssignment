import { NavLink, Header, Video,Body } from '.'
import './task2.css'

const Task2Page = () => {
  return (
    <div className="task2-page">
      <Header />
      <Body />
      <NavLink to="/">
        <button className="btn-task-1">Task 1</button>
      </NavLink>
      <Video />
    </div>
  )
}

export default Task2Page
