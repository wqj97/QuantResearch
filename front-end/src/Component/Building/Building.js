import React from 'react'
import './Building.scss'
class Building extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="Building">
        建设中...
        <img src={require('../../assets/building.png')} alt="建设中"/>
      </div>
    )
  }
}

export default Building
