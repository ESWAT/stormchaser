import React from 'react';
import Heroes from './Heroes';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Stormchaser</h1>
        <Heroes />
      </div>
    );
  }
}

export default App;
