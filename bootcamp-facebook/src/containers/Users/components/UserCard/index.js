import React from 'react'
import { Container, Image, Name } from './styles'

const UserCard = ({ image, name, id }) => (
  <Container to={`/user/${id}`}>
    <Image src={image} />
    <Name>{name}</Name>
  </Container>
)

export default UserCard
