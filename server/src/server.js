import express from 'express';
import cors from 'cors';
import connection from './db.js'; 

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const sql = "SELECT * FROM EMPLOYEE";
    connection.query(sql, (err, results) => {
        if (err) return res.json({Message: "Error inside the server"});
        return res.json(results);
    });
});

app.post('/create', (req, res) => {
    const { name, title } = req.body;
    if (!name || !title || name.trim() === '' || title.trim() === '') {
        return res.status(400).json(err);
    }
    const sql = "INSERT INTO EMPLOYEE (`full_name`, `job_title`) VALUES (?)";
    const values = [req.body.name, req.body.title];
    connection.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM EMPLOYEE WHERE ID = ?";
    const id = req.params.id;

    connection.query(sql, [id], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE EMPLOYEE SET `full_name` = ?, `job_title` = ? WHERE ID = ?";
    const values = [req.body.name, req.body.title, req.params.id];

    connection.query(sql, values, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM EMPLOYEE WHERE ID = ?";
    const id = req.params.id;

    connection.query(sql, [id], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });

});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
    connection.connect(err => {
        if (err) throw err;
        console.log('MySQL database connected!');
    });
});
