import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  width: 100vw;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vw;
`

export const Image = styled.img`
  width: 50vw;
  height: auto;
  margin-bottom: 5vh;
`

export const Post = styled(Flex)`
  background-color: lightgrey;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;
  height: 10vh;
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const Posts = styled(Flex)`
  flex-direction: column;
  width: 80vw;
  height: auto;
`
