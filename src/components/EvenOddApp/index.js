// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevState => ({
      count: prevState.count + 1 + Math.ceil(Math.random()),
    }))
  }

  render() {
    const {count, isCreaseClicked} = this.state

    const condition = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="count-container">
          <h1>Count {count}</h1>
          <p>Count is {condition}</p>
          <button onClick={this.onIncrease}>Increment</button>
          <p>*Increase By Random Number Between 1 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
