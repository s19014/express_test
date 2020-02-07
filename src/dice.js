// p278
const express = require('express')
const app = express()
const portNo = 8000

app.get('/', (req, res) => {
  res.send(
    '<p><a href="/dice/6">6面体のサイコロ</a><br />' +
      '<a href="/dice/12">12面体のサイコロ</a></p>'
  )
})

app.get('/dice/6', (req, res) => {
  res.send('今回は...' + dice(6))
})

app.get('/dice/12', (req, res) => {
  res.send('今回は...' + dice(12))
})

const dice = n => {
  return Math.floor(Math.random() * n) + 1
}

app.listen(portNo, () => {
  console.log('起動しました', `http://localhost:${portNo}`)
})
