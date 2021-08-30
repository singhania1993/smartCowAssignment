import Cards from './Cards'
import { useInput } from '../context'
import Header from './Header'
import InputBox from './Input'
import SideBar from './SideBar'
import './task1.css'
function HomePage() {
  const { navState } = useInput()
  return (
    <div>
      <Header />

      {navState && <SideBar />}
      <InputBox />
      <Cards />
    </div>
  )
}

export default HomePage
