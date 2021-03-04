
const express = require('express')
const app = express()
const port = 3000



const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*"); //Disable Security Rule
    res.header("Access-Control-Allow-Headers", "ContentType");
    next();
});


app.get('/cryptoPrices', (req, res) => {


        const cryptoPrices = [

            {name: 'Bitcoin', text: 'https://'},
            {name: 'Ethereum', text: 'https://'},
            {name: 'Ripple', text: 'https://'},

     ]


  res.send(cryptoPrices)
})


app.post('/cryptoPrices', async(req, res) =>{

    console.log(req,body)

    //to do later

    res.send('success')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })