import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 150px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  background-color: purple;
`

export const Name = styled(Flex)`
  width: 150px;
  height: 50px;
  text-align: center;
  color: white;
  font-size: 1rem;
`

export const Image = styled.img`
  width: 150px;
  height: 100px;
`
