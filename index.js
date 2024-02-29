import dotenv from "dotenv"
import colors from "colors"

import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./graphql/typeDefs.js"
import { resolvers } from "./graphql/resolvers.js"



// config
dotenv.config()
const server = new ApolloServer({
    typeDefs,
    resolvers,
});


// server port 
const PORT = process.env.PORT || 9090


const { url } = await startStandaloneServer(server, {
    listen: { port: PORT }
})

console.log(`🚀  Server ready at: ${url}`.bgCyan.black);;
