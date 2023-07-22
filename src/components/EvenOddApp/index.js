// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrease = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({
      count: prevState.count + randomNum,
    }))
  }

  countValue = () => {
    const {count} = this.state
    if (count > 100) {
      return <h1>Count 0</h1>
    }
    return <h1>Count {count}</h1>
  }

  render() {
    const {count, isCreaseClicked} = this.state

    const condition = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="count-container">
          {this.countValue()}
          <p>Count is {condition}</p>
          <button onClick={this.onIncrease}>Increment</button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
