import React, { Component } from 'react';
import './App.css';
import KsdNav from './KsdNav';
import KsdIntro from './KsdIntro';
import KsdButtonToolbar from './KsdButtonToolbar';
import KsdFooter from './KsdFooter';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  render() {
    return (
      <React.Fragment>
        <KsdNav />
        <KsdIntro />
        <KsdButtonToolbar />
        <KsdFooter />
      </React.Fragment>
    );
  }
}

export default App;
