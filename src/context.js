import { createContext, useContext, useState } from 'react'

const InputContext = createContext()

export const InputProvider = ({ children }) => {
  const [inputState, setInputState] = useState('')
  const [navState, setNavState] = useState(false)
  return (
    <InputContext.Provider
      value={{ inputState, setInputState, navState, setNavState }}
    >
      {children}
    </InputContext.Provider>
  )
}

export const useInput = () => useContext(InputContext)
