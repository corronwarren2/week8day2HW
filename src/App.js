import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';

export default class App extends Component {
  constructor(props){
    super(props);
    console.log('Component Constructing...')
    this.state = {
      myName: 'Corron',
      racers: []
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
  fetch('https://ergast.com/api/f1/2021/1/driverStandings.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
  })
  
}

  render() {
    console.log('Component Rendering...')
    const myName = this.state.myName;
    return (
      <div>
        <Navbar myName={myName} />
        <div class="container">
          <Switch>
            <Route  exact path='/'>
              <Home myName={myName} updateName={this.updateName}/>
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>
          <h1>Single Page Test</h1>
        </div>
      </div>
    )
  }
}
