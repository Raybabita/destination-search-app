// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {imgUrl, name} = destinationsList
  return (
    <li className="list-item">
      <img className="destination-img" alt={name} src={imgUrl} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
