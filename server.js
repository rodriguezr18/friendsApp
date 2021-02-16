const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());

//Connecting to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'skylark_demo'
});

db.connect(err => {
    if (err) {
        return err;
    }else{
        console.log('Mysql connection good');
    }
});

app.get('/api/user/:username/:password', (req, res) => {
    const reqName = req.params.username;
    const reqPass = req.params.password;
    console.log(reqName);
    db.query('SELECT * FROM users ', ((err, result) =>{
        if(err){
            console.log(err);
        }else{
            let userArray = Object.keys(result);
            userArray.filter(item => {
                let x = result[item]
                if (x.user_name === reqName && x.user_password === reqPass){
                    console.log(x);
                    res.send(x);
                };
            });
        };
    }));
});

app.get('/friends/:userid', (req,res) => {
    const userId = req.params.userid;
    db.query(`SELECT users.user_name FROM users LEFT JOIN friends ON friends.user_id2 = users.id WHERE friends.user_id1 = ${userId}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/users',(req,res) => {
    db.query(`SELECT users.user_name, users.id, quotes.user_quote FROM quotes INNER JOIN users ON quotes.user_id = users.id`, (err, results) => {
        if(err){ 
            console.log(err);
        }else{
            res.send(results);
        };
    });
});

app.post('/friends/:userId', (req, res) => {
    console.log(req.body);
    const userId = req.params.userId;
    const friendId = req.body.friendId;
    db.query(
        'INSERT INTO friends (user_id1, user_id2) VALUES (?,?)',
        [userId, friendId], (err, result) => {
            if (err) {
                console.log(err);
            }else{
                res.send('Values inserted')
            }

        }
    )
})


app.listen(4000, () => {
    console.log('Listening on port 4000')
});