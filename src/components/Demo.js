import React from 'react'
class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.log('constructor')
   // console.log(this.props.name)
  }
  componentDidMount(){
    console.log('did mount')
  }
  render() {
    console.log('render')
    return (
      <>
        <h1>Name:{this.props.name}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Increment</button>
      </>

    )
  }
}
export default Demo;