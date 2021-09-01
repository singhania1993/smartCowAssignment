import { Card, useInput } from '.'

const Cards = () => {
  const { inputState, navState } = useInput()
  let count = 0
  return (
    <div className={`cards ${navState ? 'ml' : ''}`}>
      {[...inputState].map((char, index) => {
        char !== ' ' && count++
        return char !== ' ' ? (
          <Card key={char + index} char={char} count={count} />
        ) : (
          ''
        )
      })}
    </div>
  )
}

export default Cards
