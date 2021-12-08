import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import Profile from './Profile';

class Profiles extends React.Component {
 render () {
  return (
    <div> 
      <Grid columns={3} divided>

    <Grid.Row>
      <Grid.Column>
        <Profile />
      </Grid.Column>
    </Grid.Row>
  </Grid>

    </div>
    )
  };
};

export default Profiles;