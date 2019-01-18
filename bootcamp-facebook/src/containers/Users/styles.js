import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex: 1;
  flex-direction: column;
  width: 100%;
`

export const Header = styled(Flex)`
  flex: 1;
  width: 100%;
  height: 50px;
  background-color: pink;
  justify-content: flex-end;
`
export const SearchBar = styled.input`
  width: 200px;
  height: 20px;
  align-self: center;
  margin-right: 20px;
`
export const UsersContainer = styled(Flex)`
  width: 100%;
  height: auto;

  flex-wrap: wrap;
  justify-content: center;
`
export const User = styled(Flex)`
  width: 150px;
  height: 150px;
  background-color: purple;
  margin: 5px;
`
