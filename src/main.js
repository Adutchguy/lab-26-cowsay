import './style/main.scss'
import React from 'react' // use jsx
import faker from 'faker'
import ReactDom from 'react-dom' //  render jsx
import cowsay from 'cowsay-browser'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      content: cowsay.say({
        text: faker.hacker.phrase(),
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
      <div>
        <h1>Hacker Cow Says...</h1>
        <pre>{this.state.content}</pre>
        <button onClick={this.handleClick}>Get More Hacker Advice</button>
      </div>
    )
  }
}







ReactDom.render(<App />, document.getElementById('root'))
