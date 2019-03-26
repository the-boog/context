import React from 'react';

const HobbyContext = React.createContext()

export const HobbyConsumer = HobbyContext.Consumer;

class HobbyProvider extends React.Component {
  state = {
  hobbies: [
    {name: "Kung Fu", id: "1"},
    {name: "Bowling", id: "2"},
    {name: "Long Walks on the Beach", id: "3"},
    {name: "Pretending to Be Harry Potter", id: "4"},
  ],

  updateHobby: (hobby) => this.updateHobby(hobby),
  }

  updateUser = (hobby) => {
    this.setState({ ...hobby, });
  }


  render() {
    return (
      <HobbyContext.Provider value={this.state}>
        { this.props.children }
      </HobbyContext.Provider>
    )
  }

}

export default HobbyProvider;


