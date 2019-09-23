import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


const API_PATH = 'https://evening-forest-23552.herokuapp.com/api/contact/index.php';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    return (
      <div className="App">
        <p> Welcome to my website! </p>
        <div>
        <form action="#">
        <label> What's your name?</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name"
          value={this.state.fname}
          onChange={e => this.setState({ fname: e.target.value })} />
        <label> What's your email? </label>
        <input type="text" id="email" name="email" placeholder="your email"
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value})} />
        <label> Message</label>
        <textarea id="message" name="message" placeholder="write here"
          onChange={e => this.setState({ message: e.target.value })}
          value={this.state.message}
        ></textarea>
        <input type="submit" value="Submit" onClick={e => this.handleFormSubmit(e)} />
        <div>
          {this.state.mailSent &&
            <div> Thank you for contacting me! </div>
          }
        </div>

        </form>
        </div>
      </div>
    );
  }

}


export default App;
