import express from 'express';
import cors from 'cors';
import connection from './db.js'; 

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const sql = "SELECT * FROM EMPLOYEE";
    connection.query(sql, (err, results) => {
        if (err) return res.json({Message: "Error inside the server"});
        return res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
    connection.connect(err => {
        if (err) throw err;
        console.log('MySQL database connected!');
    });
});
