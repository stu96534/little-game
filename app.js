const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const router = require('./routes')

const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(express.static('routes'))
app.use(router)

app.listen(port, () => {
  console.log(`This is listening on http://localhost:${port}`)
})