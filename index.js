const express = require("express");
const expressGraphql = require("express-graphql");
const graphqlTools = require("graphql-tools");

const server = express();

const schema = graphqlTools.makeExecutableSchema({
    typeDefs: require('./data/typeDefs.js'),
    resolvers: require('./data/resolvers.js')
});

const handler = expressGraphql({
    schema: schema,
    graphiql: true
});

server.use("/api", handler);
server.listen(4000);