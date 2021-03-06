const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})()

app.use('/dist', express.static(path.resolve(__dirname, './dist')))

require('./build/dev-server')(app)

app.get('*', (req, res) => {
  res.write(indexHTML)
  res.send()
})

const port = process.env.PORT || 3001
const host = process.env.HOST || 'http://localhost'

app.listen(port, () => {
  console.log(`server listening on port ${host}:${port}`)
})
