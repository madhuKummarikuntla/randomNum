// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onChange = () => {
    const randomNum = this.getRandomNum()
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const display = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-con">
        <div className="home-con">
          <h1 className="head"> Count {count}</h1>
          <p className="data">Count is {display}</p>
          <button className="button" type="button" onClick={this.onChange}>
            Increment
          </button>
          <p className="des">*Increase by random number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
