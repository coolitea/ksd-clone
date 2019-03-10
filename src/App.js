import React, { Component } from 'react';
import './App.css';
import KsdNav from './KsdNav';
import KsdIntro from './KsdIntro';
import KsdButtonToolbar from './KsdButtonToolbar';
import KsdService from './KsdService';
import KsdFooter from './KsdFooter';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  render() {
    return (
      <React.Fragment>
        <KsdNav />
        <KsdIntro />
        <div>
          <KsdButtonToolbar />
        </div>
        <div>
          <KsdService />
        </div>
        <footer className="footer">
          <KsdFooter />
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
