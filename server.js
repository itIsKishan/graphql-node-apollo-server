const { ApolloServer, gql} = require("apollo-server")
const { typeDefs } = require('./Schema/typeDefs')
const {resolvers} = require('./Schema/resolvers')

const server = new ApolloServer({typeDefs,resolvers})

server.listen().then(({url}) =>{
    console.log(`your api is running in ${url}`)
})