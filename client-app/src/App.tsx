import React, {Component} from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
   // this.setState({
     // values: [{id: 1, name: 'Value 101'}, {id: 2, name: 'Value 102'}]
    //})
    axios.get('http://localhost:5000/api/values/')
      .then((response) => {
        this.setState({
          values: response.data
        })
      })
  }

  render () {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Young Minds</Header.Content>
        </Header>
        <List>
        {this.state.values.map((value: any) => (
              <List.Item key ={value.id}>{value.name}</List.Item>
            ))}
        </List>
      </div>
    );
  }

}

export default App;