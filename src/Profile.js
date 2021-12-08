import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react';
import Profiles from './Profiles';

/// Dummy Data
let user1 = {name: 'Denny', bio: "Rock climber, lives in Ca", friends: Math.floor(Math.random() * 10)}
let user2 = {name: 'Sara', bio: "Chef, programmer, lives in Co", friends: Math.floor(Math.random() * 10) }
let user3 = {name: 'Darryl', bio: "Stinky, loves science", friends: Math.floor(Math.random() * 10) + 1}

let users = [user1, user2, user3]



class Profile extends React.Component {
  render () {
    return (
      users.map ((user)=>{
        return (
            <Card>
                <Card.Content>
                  <Image> *Picture Here* </Image>
                <Card.Header>{user.name}</Card.Header>
               <Card.Meta>
                <span className='date'>Joined {(Math.floor(Math.random() * 15)  + 2000)}</span>
               </Card.Meta>
                  <Card.Description>
                    {user.bio}
                  </Card.Description>
               </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                <p>{`${user.name} has ${user.friends} friends`}</p>
              </a>
            </Card.Content>
          </Card>
         )
      })
    )
  };
};
         
  
export default Profile;