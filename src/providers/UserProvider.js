import React from 'react';
import doghair from '../components/doghair.jpeg';

const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = {
  email: 'test@test.com',
  firstName: 'Paul',
  lastName: 'Smith',
  superPower: 'Telekenisis',
  imageUrl: doghair,
  updateUser: (user) => this.updateUser(user),
  }

  updateUser = (user) => {
    this.setState({ ...user, });
  }


  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }

}

export default UserProvider;


