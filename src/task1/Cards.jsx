import { useInput } from '../context'

const Cards = () => {
  const { inputState, navState } = useInput()
  let count = 0
  return (
    <div className={`cards ${navState ? 'ml' : ''}`}>
      {[...inputState].map((char, index) => {
        char !== ' ' && count++
        return char !== ' ' ? (
          <div
            key={index + char}
            className={`card ${count % 3 === 0 ? 'highlight-card' : ''}`}
          >
            {char}
          </div>
        ) : (
          ''
        )
      })}
    </div>
  )
}

export default Cards
