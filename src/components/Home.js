import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import { UserConsumer } from '../providers/UserProvider';

const Home = () => (
  <UserConsumer>
    { value => (
    <Header as="h1" style={{textAlign: 'center', padding: '20px'}}>
      Welcome Home 
      <br />
      {value.firstName}
      <br />
      <Image size="massive" style={{height: "500px", width: "500px"}} src="https://media.giphy.com/media/3o7aDgf134NzaaHI8o/giphy.gif"></Image>
    </Header>
    )}
  </UserConsumer>
)



export default Home;
