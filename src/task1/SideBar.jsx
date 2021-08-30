import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/task2" className="nav-link">
        {' '}
        <h5 className="menu-option">Task 2</h5>
      </NavLink>
    </div>
  )
}

export default SideBar
