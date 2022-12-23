// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  GenerateRandom = () => {
    const createdRandomNumber = Math.random() * 100
    this.setState({randomNumber: createdRandomNumber})
  }

  render() {
    const {randomNumber} = this.state
    console.log(randomNumber)
    return (
      <div className="main-div">
        <div className="sub-div">
          <h1>Random Number</h1>
          <p>Generate a Random number in the range of 0 to 100 </p>
          <button className={`${this.GenerateRandom} btn`} type="button">
            Generate
          </button>
          <p className="span">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
