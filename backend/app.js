const express = require('express');
const articleApi = require('./routes/article_api');
const authorApi = require('./routes/author_api');
const cors = require('cors')
require('./config/connect');
require('dotenv/config');
const app = express();
app.use(express.json());
app.use(cors());

app.use('/article' , articleApi);
app.use('/author' , authorApi);

app.use('/getimage' , express.static('./uploads'));


app.listen(process.env.PORT, ()=>{
    console.log('server work');
})