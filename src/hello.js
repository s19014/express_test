// p276
const express = require('express')
const app = express()
const portNo = 8081

// app.get('/', (req, res, next) => {
//   // 引数は、req(リクエスト), res(レスポンス)の順で
//   res.send('Hello World!')
// })

// JSONの場合の書き方
// URLで/jsonにすると表示される
// app.get('/json', (req, res, next) => {
//   res.send(JSON.stringify({ key1: 'value1', key: 'value2' }))
// })

// app.get('/users', (req, res) => {
//   res.send(JSON.stringify({ list: [{ name: omas }, { name: 'louiee' }] }))
// })

app.get('/users/:name', (req, res) => {
  res.send(`${req.params.name} さん`)
})

app.get('/users', (req, res) => {
  res.send(
    JSON.stringify({ list: [{ name: 'omas', age: '11' }, { name: 'louiee' }] })
  )
})

app.get('/', (req, res, next) => {
  res.send(
    '<form action=""><input type="text" name="age" ><input type="submit"></form>'
  )
})

app.get('/query', (req, res) => {
  res.send(req.query.age)
})

// app.listen(portNo)
app.listen(portNo, () => {
  console.log('起動しました。', `http://localhost:${portNo}`)
})
