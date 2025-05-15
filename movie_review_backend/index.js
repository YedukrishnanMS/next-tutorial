import { startStandaloneServer } from "@apollo/server/standalone"
import { resolvers } from "./resolvers.js"
import { schema } from "./schema.js"
import { connectDB } from "./dbConnector.js"
import { ApolloServer } from "@apollo/server"

async function startServer() {
  await connectDB()

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => ({}),
    cors: {
      origin: "*"
    }
  })

  console.log(`🚀 Server ready at ${url}`)
}

startServer()