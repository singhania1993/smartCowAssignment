import { useInput, NavLink } from '.'

const SideBar = () => {
  const { navState } = useInput()
  return (
    <div className={`sidebar ${navState ? 'show' : 'hide'}`}>
      <NavLink to="/task2" className="nav-link">
        {' '}
        <h5 className="menu-option">Task 2</h5>
      </NavLink>
    </div>
  )
}

export default SideBar
