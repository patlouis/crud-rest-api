import mysql from 'mysql'; 

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'employee_data',
    user: 'root',
    password: 'root'
});

export default connection;