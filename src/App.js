import React, { Component } from 'react';
import './App.css';
import KsdNav from './KsdNav';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  render() {
    return (
      <React.Fragment>
        <KsdNav />
        <h1>Sample Home Page</h1>
      </React.Fragment>
    );
  }
}

export default App;
