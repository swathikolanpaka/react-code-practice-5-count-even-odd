// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevState => {
      count: prevState.count + 1 + Math.ceil(Math.random())
    })
  }

  render() {
    const {count, isCreaseClicked} = this.state

    return (
      <div className="bg-container">
        <biv className="count-container">
          <h1>Count {count}</h1>
          <p>Count is </p>
          <button onClick={this.onIncrease}>Increment</button>
          <p>*Increase By Random Number Between 1 to 100</p>
        </biv>
      </div>
    )
  }
}

export default LightDarkMode
