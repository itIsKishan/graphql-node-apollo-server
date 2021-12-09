const { gql } = require("apollo-server")

const typeDefs = gql`

  type User {
    id : ID!
    name : String!
    email : String!
    age : Int
    isMarried : Boolean
    nationality : Nationality!
    friends : [User]
    moviesLiked : [Movie]
  }
  
  type Movie{
    id : ID!
    name : String!
    yearOfPublication : Int! 
    
  }
  type Query {
    users : [User]!
    user(id : ID!) : User!
    movies : [Movie]!
    movie(id : String!) : Movie!
  }

  input CreateUser{
    name : String!
    email : String!
    age : Int!
    isMarried : Boolean
    nationality : Nationality!
  
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  type Mutation{
    createUser(input: CreateUser!): User!
    deleteUser(id : ID!) : User
    updateUsername(input : UpdateUsernameInput) : User
  
  }

  enum Nationality {
    USA
    CANADA
    SRILANAKA
    UNIVERSE
    INDIA
  }
`

module.exports = {typeDefs}