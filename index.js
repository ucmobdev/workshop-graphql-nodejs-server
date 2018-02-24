const express = require("express");
const expressGraphql = require("express-graphql");
const schema = require("./graphql/schema.js");
const server = express();

server.use("/", expressGraphql({schema, graphiql: true}));
server.listen(4000);