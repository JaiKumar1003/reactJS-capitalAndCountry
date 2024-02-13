import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  onClicklist = () => {
    console.log(value)
  }
  render() {
    return (
      <div className="bg-container">
        <div className="capital-card">
          <h1 className="heading">Countries And Capitals</h1>
          <form>
            <select onClick={this.onClicklist} id="capitalList" className="select-list">
              {countryAndCapitalsList.map(eachObject => (
                <option value={eachObject.capitalDisplayText}>
                  {eachObject.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capitalList">is capital of which country?</label>
          </form>
          <p></p>
        </div>
      </div>
    )
  }
}

export default Capitals
