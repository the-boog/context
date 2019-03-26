import React from 'react';
import {Card, Image, Container, Button, Form} from 'semantic-ui-react';
import { UserConsumer } from '../providers/UserProvider';

class UserInfo extends React.Component {
  state ={firstName: this.props.firstName, lastName: this.props.lastName, email: this.props.email, superPower: this.props.superPower, showForm: false}

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...this.state, };
    this.props.updateUser(user);
    this.toggleForm()
  }

  handleSave = () => {
    const user = { ...this.state, };
    this.props.updateUser(user);
    this.toggleForm()
  }

  handleChange = (e) => {
    const { target: {name, value, } } = e;
    this.setState({ [name]: value });
  }

  cardForm = (label, value, key) => {
    return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
      name={key}
      defaultValue={value}
      onChange={this.handleChange}
      label={label}
      />
      
    </Form>
    )
  }
  
  render () {
    const {email, firstName, lastName, superPower, imageUrl} = this.props
    const {showForm} = this.state
    return (
      <>
      <Container>      
        <Card style={{border: "2px solid black"}}>
          <Image src={ imageUrl} />
          <Card.Content>
            <Card.Header>{ showForm ? this.cardForm('First Name', firstName, 'firstName') : firstName}</Card.Header>
            <Card.Header>{ showForm ? this.cardForm('Last Name', lastName, 'lastName') : lastName}</Card.Header>
            <Card.Meta>
              email: {showForm ? this.cardForm('Email', email, 'email') : email }
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            { showForm ? this.cardForm('Super Power', superPower, 'superPower') : superPower }
            <br />
            { showForm ? <Button color="green" size='mini' onClick={() => this.handleSave()}>Save</Button> : ''}
          </Card.Content>
          <Button size="mini" color="black" onClick={() => this.toggleForm()}>Edit</Button>
        </Card>
       
      </Container>

      </>
    )
  }
}


const ConnectedUserInfo = () => {
  return (
    <UserConsumer>
      { value => (
        <UserInfo
        
          email={value.email}
          firstName={value.firstName}
          lastName={value.lastName}
          superPower={value.superPower}
          imageUrl={value.imageUrl}
          updateUser={value.updateUser}
          />
          )}
      </UserConsumer>
           
  )
}

export default ConnectedUserInfo;

