const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-orgin requests
app.use(cors())

// connect to database
mongoose.connect('mongodb+srv://onyi123:onyi123@emmacluster.tqnepbs.mongodb.net/user?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('connected to database');
})
// 



app.use('/graphql', graphqlHTTP({
  schema,
   graphiql: true,
}));

app.listen(4000, () => {
  console.log(`Server listening on port 4000`)
});
