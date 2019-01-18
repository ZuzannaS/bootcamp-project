const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    user(id: ID!): User!
    users(
      substr: String
      hometown: String
      house: String
      concentration: String
      hobbies: String
    ): [User!]
    follows(status: String!, id: ID!): [Follows!]
    post(id: ID!): Post!
    posts: [Post!]
  }

  type Mutation {
    createUser(input: CreateUserInput!): LoginReturn!
    createPost(content: String!): CreatePostReturn!
    createFollow(followerId: ID!, followingId: ID!, status: String!): CreateFollowReturn!
    editFollow(id: ID!, status: String!): EditFollowReturn!
    editPost(id: ID!, newContent: String!): EditPostReturn!
    loginUser(email: String!, password: String!): LoginReturn!
  }

  type CreatePostReturn {
    post: Post
    error: Error
  }

  type EditPostReturn {
    post: Post
    error: Error
  }

  type CreateFollowReturn {
    error: Error
  }

  type EditFollowReturn {
    error: Error
  }

  input CreateUserInput {
    name: String
    email: String!
    password: String!
    birthday: String
    concentration: String
    hometown: String
    house: String
    gender: String
    bio: String
    picture: String
    hobbies: [HobbyInput!]
  }

  input HobbyInput {
    hobby: String!
  }
  type Follows{
    id: ID!
    followerId: ID!
    followingId: ID!
    status: String!
  }
  type User {
    id: ID!
    name: String
    email: String!
    birthday: String
    concentration: String
    hometown: String
    house: String
    gender: String
    bio: String
    picture: String
  }
  type Post {
    id: ID!
    content: String!
    createdAt: String
    updatedAt: String
  }

  type LoginReturn {
    user: User
    token: String
    error: Error
  }

  type Error {
    message: String
  }
`
