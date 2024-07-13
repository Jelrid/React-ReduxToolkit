import mysql from 'mysql2';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())

const connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'qweqwe123',
    database: 'testtask'
}).promise()


app.get('/api/filial', async (req, res) => {
    try {
        const [rows] = await connect.query("SELECT * FROM filial");
        res.json(rows);
    } catch (error){
        console.error('Ошибка', error);
        res.status(500).send({message:'Ошибка сервера'});
    }
    
});

app.listen(3001);

