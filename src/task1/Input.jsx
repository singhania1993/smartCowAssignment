import { useInput } from '.'

const InputBox = () => {
  const { navState, inputState, setInputState } = useInput()
  return (
    <input
      type="text"
      placeholder="Enter a String"
      value={inputState}
      className={`input--field ${navState && 'ml'}`}
      onChange={(e) => {
        setInputState(e.target.value)
      }}
    />
  )
}

export default InputBox
