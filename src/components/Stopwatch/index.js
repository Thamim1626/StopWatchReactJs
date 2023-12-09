import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0, start: false}

  start = () => {
    const {start} = this.state
    if (!start) {
      this.startTimer = setInterval(() => {
        this.setState(prevState => ({time: prevState.time + 1}))
      }, 1000)
      this.setState(prevState => ({start: !prevState.start}))
    }
  }

  stop = () => {
    clearInterval(this.startTimer)
    this.setState(prevState => ({start: !prevState.start}))
  }

  reset = () => {
    this.setState({time: 0})
    this.setState({start: false})
    clearInterval(this.startTimer)
  }

  render() {
    const {time} = this.state
    const min = Math.floor(time / 60)
    const sec = time % 60
    return (
      <div className="main-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="card-head">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-icon"
            />
            <p className="timmer-text">Timmer</p>
          </div>
          <h1>
            {min > 9 ? min : `0${min}`}:{sec > 9 ? sec : `0${sec}`}
          </h1>
          <div className="buttons">
            <button type="button" className="red" onClick={this.start}>
              Start
            </button>
            <button type="button" className="green" onClick={this.stop}>
              Stop
            </button>
            <button type="button" className="yellow" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
