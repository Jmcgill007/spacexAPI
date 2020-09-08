const express = require('express')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql')
const PORT =  process.env.PORT || 8080;
const schema = require('./schema.js')
const cors = require('cors'); 
const { response } = require('express');
const app = express();
app.use(cors());
app.use('/graphql', bodyParser.json(), graphqlHTTP({
    schema,
    graphiql: true
}));

app.use(express.static('public'));
app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.listen(PORT, ()=>{
    console.log(`Serving up silly sounds on on Portal# ${PORT}`)
});