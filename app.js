const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.json());

require('dotenv/config');

const api = process.env.API_URL;
//initialize the root to the server using get
app.get(`${api}/products`,(req,res)=>{  
    const product ={
        id: 1,
        name: 'hair dresser',
        image: 'some_url'
    }
    res.send('hello Api') 

})

app.listen(3000,()=>{
    console.log(api); 
    console.log('server is running on http://localhost:3000')
    
})