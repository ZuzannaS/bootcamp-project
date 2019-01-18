import React, { Component } from 'react'
import { Container, Header, SearchBar, UsersContainer } from './styles'
import UserCard from './components/UserCard'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const QUERY_USERS = gql`
 query users($substr: String) {
  users(substr: $substr) {
   name 
  }
}
`
class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value })
  }

  render() {
    const users = [...Array(10)].map(() => (
      <UserCard
        image="https://static.stereogum.com/uploads/2018/01/GettyImages-889998292-1517445539-640x462.jpg"
        name="Rivers Cuomo"
      />
    ))
    return (
      <Container>
        <Header>
          <SearchBar
            classname="serachbar"
            placeholder="Search"
            onChange={this.handleChange}
          />
        </Header>
        <Query
          query={QUERY_USERS}
          variables={{ substr: this.state.searchText }}
        >
          {({ loading, error, data }) => (
            <UsersContainer>{JSON.stringify(data.users)}}</UsersContainer>
          )}
        </Query>
      </Container>
    )
  }
}

export default Users
