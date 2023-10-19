const express = require('express')
const timeout = require('connect-timeout')
const app = express()

const PORT = process.env.PORT || 5000

app.use(timeout('30s'))
app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('4') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log('server started on port 5000') // eslint-disable-line no-console
})
