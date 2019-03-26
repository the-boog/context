import React from 'react';
import {Header, Container, Button, Form} from 'semantic-ui-react';
import { HobbyConsumer } from '../providers/HobbyProvider';

class Hobby extends React.Component {
  state ={name: this.props.name, showForm: false}

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const hobby = { ...this.state, };
    this.props.updateHobby(hobby);
    this.toggleForm()
  }

  handleSave = () => {
    const hobby = { ...this.state, };
    this.props.updateHobby(hobby);
    this.toggleForm()
  }

  handleChange = (e) => {
    const { target: {name, value, } } = e;
    this.setState({ [name]: value });
  }

  
  
  render () {
    const {hobbies} = this.props
    const {showForm} = this.state
    return (
      <div>
    
        <Container>
          <Header>
            Hobbies:
          </Header> 
        
        {hobbies.map( h => {
          return (
            <div key={h.id}>
              {h.name}
            </div>
          )
        })
      }
        </Container>
      </div>
    )
  }
}


const ConnectedHobby = () => {
  return (
    <HobbyConsumer>
      { value => (
        <Hobby
          hobbies={value.hobbies}
          updateHobby={value.updateHobby}
          />
          )}
      </HobbyConsumer>
           
  )
}

export default ConnectedHobby;

