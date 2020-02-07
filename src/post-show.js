// p282

const express = require('express')
const app = express()
const bodyParser = require('body-parser') // npmでインストールした
app.use(bodyParser.urlencoded({extended: true}))　// falseでもできた　なぜ？

app.listen(8000, () => {
    console.log('起動しました - http://localhost:8000')
})

app.get('/test', (req, res) => {  // 20行目と同じurlにする
    res.send(
        '<form method="POST">' +
        '<textarea name="memo">テスト</textarea><br />' +
        '<input type="submit" value="送信"></form>'
    )
})

app.post('/test', (req, res) => {   // 10行目と同じurlにする
    const s = JSON.stringify(req.body)
    res.send("POSTを受信:" + s )
})