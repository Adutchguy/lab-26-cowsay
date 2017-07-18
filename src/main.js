import './style/main.scss'
import React from 'react'
import faker from 'faker'
import ReactDom from 'react-dom'
import cowsay from 'cowsay-browser'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      content: cowsay.say({
        text: "What would you like to learn, friend?",
        e: "oO",
        T: "U "
      }),
    }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e){
    this.setState((state) => {
      return {
        content: cowsay.say({
          text: faker.hacker.phrase(),
          e: "oO",
          T: "U "
        })
      }
    })
  }

  render() {
    return (
      <div className="cow-div">
        <h1>Hacker Cow Says...</h1>
        <pre>{this.state.content}</pre>
        <button onClick={this.handleClick}>Get Hacker Cow Advice</button>
      </div>
    )
  }
}







ReactDom.render(<App />, document.getElementById('root'))
