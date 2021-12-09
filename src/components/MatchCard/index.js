// Write your code here

import './index.css'

const Match = props => {
  const {details} = props
  const {imageUrl, competingteam, content, status} = details

  return (
    <div className="box">
      <div className="back">
        <img
          src={imageUrl}
          alt={`latest match ${competingteam}`}
          className="size"
        />
        <p>{competingteam}</p>
        <p>{content}</p>
        <p>{status}</p>
      </div>
    </div>
  )
}

export default Match
