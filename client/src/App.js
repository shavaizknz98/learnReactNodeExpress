import React, { Component } from 'react';
import './App.css';
import { ShoppingList } from './components/ShoppingList.js';


class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));

    this.getDateTimeFromAPI()
      .then(res => this.setState({ datetime: res.datetime }))
      .catch(err => console.log(err));

  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  getDateTimeFromAPI = async () => {
    const response = await fetch('/datetime_now');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div>
        <ShoppingList time={this.state.datetime} />
        <p className="express-connected">{this.state.data}</p>
      </div>
    );
  }
}

export default App;