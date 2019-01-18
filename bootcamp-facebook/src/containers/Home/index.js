import React, { Component } from 'react'
import { Container } from './styles'
import LoginModal from './components/LoginModal'

class Home extends Component {
  render() {
    return (
      <Container>
        <LoginModal />
      </Container>
    )
  }
}

export default Home
