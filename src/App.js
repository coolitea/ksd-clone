import React, { Component } from 'react';
import './App.css';
import KsdNav from './KsdNav';
import KsdIntro from './KsdIntro';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  render() {
    return (
      <React.Fragment>
        <KsdNav />
        <KsdIntro />
        <h1>Sample Home Page</h1>
        <h2>Sample Home Page Header 2</h2>
      </React.Fragment>
    );
  }
}

export default App;
