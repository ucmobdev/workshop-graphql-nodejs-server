const typeDefs = require('./typeDefs.js');
const resolvers = require('./resolvers.js');
const { makeExecutableSchema } = require('graphql-tools');

module.exports = makeExecutableSchema({typeDefs, resolvers});