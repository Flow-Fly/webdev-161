import React from 'react'
import Container from '../Container/Container'

class ClassCounter extends React.Component {
  state = {
    count: 0,
    helloReact: 'Hello React',
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  addBang = () => {
    this.setState({
      helloReact: this.state.helloReact + '!',
    })
  }

  render() {
    return (
      <>
        <Container background="darkgreen">
          <button onClick={this.handleDecrement}>-</button>
          <h3>{this.state.count}</h3>
          <button onClick={this.handleIncrement}>+</button>
          <p onMouseOver={this.addBang}>{this.state.helloReact}</p>
        </Container>
      </>
    )
  }
}

export default ClassCounter
