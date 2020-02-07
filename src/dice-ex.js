// p279

const express = require('express')
const app = express()
const portNo = 8000

app.get('/', (req, res) => {
  res.send(
    '<p><a href="/dice/6">6面体のサイコロ</a><br />' +
      '<p><a href="/dice/12">12面体のサイコロ</a></p>'
  )
})

app.get('/dice/:num', (req, res) => {
  res.send('今回は...' + dice(req.params.num))
})

const dice = n => {
  return Math.floor(Math.random() * n) + 1  // randomじゃなくて、random()
}

app.listen(portNo, () => {
  console.log('起動しました', `http://localhost:${portNo}`)
})
