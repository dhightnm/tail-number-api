const PORT = process.env.PORT || 8800

const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')


const app = express()

app.get('/', (req, res) => {
    res.json('HELLO!')
});

app.get('/tail', (req, res) => {
    axios.get('https://registry.faa.gov/aircraftinquiry/Search/NNumberInquiry')
      .then(response => {
          //add user input to the input field and add submit click event
          const html = response.data
          res.json(html)
      })
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})