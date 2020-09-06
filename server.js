const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const app = express();
const PORT =  process.env.PORT || 3030;
const schema = require('./schema.js')
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(PORT, ()=>{
    console.log(`Serving up silly sounds on on Portal# ${PORT}`)
});