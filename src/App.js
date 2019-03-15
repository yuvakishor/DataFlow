import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import cardData from './components/CardJson'
import Post from './components/Post'


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          {
            cardData.map((val, i) => (
              <Header
                key={i}
                name={val.name}
                age={val.age}
                email={val.email}
                imgUrl={val.imgUrl}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default App;
