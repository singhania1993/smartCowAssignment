const Card = ({ key, char, count }) => {
  return (
    <div
      key={key}
      className={`card ${count % 3 === 0 ? 'highlight-card' : ''}`}
    >
      {char}
    </div>
  )
}

export default Card
