import React, { Component } from 'react';
import Users from './components/users/index'

    class App extends Component {

      state = {
        users: []
      }

      componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then((data) => {
          this.setState({ users: data.results })
        })
        .catch(console.log)
      }

      render() {
        return (
          <Users users={this.state.users} />
        );
      }
    }

    export default App;
