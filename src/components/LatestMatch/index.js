// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    first,
    second,
    manofthematch,
    umpires,
    competingteamlogo,
    date,
    venue,
    competingteam,
    result,
  } = details

  return (
    <div className="back">
      <div className="flex">
        <div>
          <h1>{competingteam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div>
          <img
            src={competingteamlogo}
            alt={`latest match ${competingteam}`}
            className="size"
          />
        </div>
      </div>
      <div>
        <p>First innings</p>
        <p>{first}</p>
        <p>Second innings</p>
        <p>{second}</p>
        <p>Man of the Match</p>
        <p>{manofthematch}</p>
        <p>umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
