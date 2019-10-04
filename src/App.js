import React, { Component } from 'react';
import './App.css'
import Card from './components/Card'

export class App extends Component {
  state = {
    currentQuote: ''
  }

  handleClick = () => {
    fetch('https://api.kanye.rest')
      .then(response => response.json())
      .then(result => this.setState({
        currentQuote: result.quote
      }))
  }

  createCard = () => {
    return <Card quote={this.state.currentQuote} />
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <h1 className='title'>Kanye said what???</h1>
          <button className='get-quote-button' onClick={this.handleClick}>He said...</button>
          {this.createCard()}
        </div>
      </div>
    );
  }
}

export default App;
