const express = require("express");
const expressGraphql = require("express-graphql");
const graphqlTools = require("graphql-tools");

const server = express();

const executableSchema = graphqlTools.makeExecutableSchema({
    typeDefs: require('./data/schema.js'),
    resolvers: require('./data/resolvers.js')
});

const handler = expressGraphql({
    schema: executableSchema,
    graphiql: true
});

server.use("/api", handler);
server.listen(4000);