import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Link} from 'react-router-dom'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teams: [],
    isloading: true,
  }

  componentDidMount() {
    this.getdata()
  }

  getdata = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()

    const teamsdata = data.teams
    const updateTeam = teamsdata.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.team_image_url,
    }))
    this.setState({teams: updateTeam, isloading: false})
  }

  render() {
    const {teams, isloading} = this.state
    return (
      <li className="back">
        <Link to="/">
          <li className="flex">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="size"
            />
            <h1>IPL Dashboard</h1>
          </li>

          {isloading ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            <li className="blogs-list">
              {teams.map(eachBlogItem => (
                <TeamCard key={eachBlogItem.id} details={eachBlogItem} />
              ))}
            </li>
          )}
        </Link>
      </li>
    )
  }
}

export default Home
