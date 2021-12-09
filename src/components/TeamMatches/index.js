// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import Match from '../MatchCard'

class TeamMatches extends Component {
  state = {
    latest: {},
    recent: {},
    team: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getmatchdetails()
  }

  getmatchdetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const image = data.team_banner_url
    const latest = data.latest_match_details

    const update = {
      competingteam: latest.competing_team,
      date: latest.date,
      venue: latest.venue,
      competingteamlogo: latest.competing_team_logo,
      first: latest.first_innings,
      second: latest.second_innings,
      manofthematch: latest.man_of_the_match,
      umpires: latest.umpires,

      result: latest.result,
    }

    const recents = data.recent_matches

    const recent = recents[0]
    const recent1 = recents[1]

    let updaterecent
    updaterecent = {
      competingteam: recent.competing_team,
      imageUrl: recent.competing_team_logo,
      status: recent.match_status,
      content: recent.result,
    }
    updaterecent = {
      competingteam: recent1.competing_team,
      imageUrl: recent.competing_team_logo,
      status: recent.match_status,
      content: recent.result,
    }
    this.setState({
      latest: update,
      recent: updaterecent,
      team: image,
      isLoading: false,
    })
  }

  render() {
    const {latest, team, recent, isLoading} = this.state
    return (
      <li>
        <div>
          <img src={team} alt="team banner" className="szie" />
        </div>
        <h1>Latest matches</h1>
        <li>
          {isLoading ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            <li className="blogs-list">
              <LatestMatch details={latest} />
            </li>
          )}
        </li>
        <div>
          {isLoading ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            <li className="blogs-list">
              <Match details={recent} />
            </li>
          )}
        </div>
      </li>
    )
  }
}
export default TeamMatches
