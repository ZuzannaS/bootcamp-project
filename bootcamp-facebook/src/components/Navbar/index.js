import React from 'react'
import { Container, StyledLink } from './styles'

const Navbar = () => (
  <Container>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/users">Users</StyledLink>
  </Container>
)

export default Navbar
