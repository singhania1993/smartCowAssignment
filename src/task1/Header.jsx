import { GiHamburgerMenu, useInput } from '.'

const Header = () => {
  const { setNavState } = useInput()
  return (
    <header className="app-header">
      <GiHamburgerMenu
        className="ham-burger"
        onClick={() => setNavState((prevState) => !prevState)}
      />
      <h1 className="header">SmartCow Task 1</h1>
    </header>
  )
}

export default Header
