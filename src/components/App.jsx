import React from 'react';
import Heroes from './Heroes';
import Display from './Display';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='Container'>
          <h1>Stormchaser</h1>
          <Heroes />
        </div>
        <Display />
      </div>
    );
  }
}

export default App;
