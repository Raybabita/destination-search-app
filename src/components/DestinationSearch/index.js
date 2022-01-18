// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ' '}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              Placeholder="Search"
              className="search-input"
              onChange={this.onChangeSearchInput}
            />
            <img
              alt="search icon"
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            />
          </div>

          <ul className="list-container">
            {searchResults.map(eachDestination => (
              <DestinationItem
                destinationsList={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
