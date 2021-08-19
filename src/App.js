import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './views/Home';

export default class App extends Component {
  constructor(props){
    super(props);
    console.log('Component Constructing...')
    this.state = {
      myName: 'Corron'
    }
  }

  updateName =() => {
    const newName = prompt('What is your name?')
    this.setState({
      myName: newName
    })
  }

componentDidMount(){
  console.log('Component Did Mount...')
  this.setState({
    myName: "Micheal Jordan"
  }
  )
}

  render() {
    console.log('Component Rendering...')
    const myName = this.state.myName;
    return (
      <div>
        <Navbar myName={myName} />
        <div class="container">
          <Home myName={myName} updateName={this.updateName}/>
        </div>
      </div>
    )
  }
}
