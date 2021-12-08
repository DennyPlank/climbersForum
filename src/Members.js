import React from 'react'
import './App.css';
import Profiles from './Profiles';

class Members extends React.Component {
  render () {
  return (
    <div>
      <h1> Climbers Forum! </h1>
      <Profiles />
      <p>Add a Profile here</p>
    </div>
  );
  }
}

export default Members;