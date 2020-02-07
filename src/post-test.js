// p281

const express = require('express')
const app = express()
app.listen(8000, () => {
  console.log('起動しました - http://localhost:8000')
})

app.get('/', (req, res) => {
  res.send(
    '<form method="POST">' +
      '<textarea name="memo">テスト</textarea>' +
      '<br/><input type="submit" value"送信">' +
      '</form>'
  )
})

app.post('/', (req, res) => {
  res.send('POSTされました')
})
