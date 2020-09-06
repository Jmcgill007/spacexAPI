const express = require('express')
const graphQlHTTP = require('express-graphql')
const app = express();
const PORT =  process.env.PORT || 8080;
const schema = require('./schema.js')
app.use('/graphql', graphQlHTTP({
    schema,
    graphiql: true
}));


app.listen(PORT, ()=>{
    console.log(`Serving up silly sounds on on Portal# ${PORT}`)
});