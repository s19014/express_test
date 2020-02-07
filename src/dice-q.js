// p280

const express = require('express')
const app = express()
const portNo = 8000

app.get('/', (req, res) => {
  if (!req.query.q) {
    res.send(
      '<p><a href="?q=6">6面体のサイコロ</a><br />' +
        '<a href="?q=12">12面体のサイコロ</a></p>'
    )
  } else {
    const q = parseInt(req.query.q, 10)
    res.send('今回は...' + dice(q))
  }
})

const dice = q => {
  return Math.floor(Math.random() * 10) + 1
}

app.listen(portNo, () => {
  console.log('起動しました', `http://localhost:${portNo}`)
})
