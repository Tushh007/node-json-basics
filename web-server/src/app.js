const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Set up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Tushar Langer'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Tushar Langer'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful.'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        lcoation: 'Philadaphia',
        forecast: 'It is 50 degrees today.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})