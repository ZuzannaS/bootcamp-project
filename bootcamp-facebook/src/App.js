import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import config from './config'
import Navbar from './components/Navbar'
import Home from './containers/Home/'
import Users from './containers/Users/'
import User from './containers/User'
import { Flex } from 'grid-styled'

// creates new client
const client = new ApolloClient({
  uri: config.graphqlUrl
})

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <Flex style={{ flexDirection: 'column' }} className="App">
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={Users} />
                <Route path="/user" component={User} />
              </Switch>
            </Flex>
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
