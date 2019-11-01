const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')
const { database } = require('../config/keys')

const app = express()

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
    console.log('server running on port: ' + app.get('port'))
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const pool = mysql.createPool(database)

const queryUpload = 'INSERT INTO login set ?'

app.post('/post', (req, res) => {
    const { username, pass } = req.body
    const upload = { username, pass }

    pool.query(queryUpload, [upload], (err, rows) => {
        res.send(err)
    })
})

const queryGetUser = 'SELECT * FROM login WHERE username = ?'

function querySingleValue(query, value) {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, [value], (err, rows) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(rows)
                }
            })
        } catch (err) {
            return (err)
        }
    })
}

app.post('/login', (req, res) => {
    const { username, pass } = req.body

    querySingleValue(queryGetUser, username)
        .then(response => {
            console.log(response)
            try {
                if (pass !== response[0].pass) {
                    res.send('wrong password')
                } else {
                    res.send('good boi')
                }
            } catch (e) {
                res.send('wrong username')
            }
        })
})