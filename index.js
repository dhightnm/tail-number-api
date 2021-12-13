const PORT = process.env.PORT || 8800

const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')


const app = express()

app.get('/', (req, res) => {
    res.json('HELLO!')
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})