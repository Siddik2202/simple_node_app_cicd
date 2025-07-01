const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// MySQL DB connection pool
const pool = mysql.createPool({
  host: 'db', // use 'db' or 'mysql' based on your service name in Kubernetes
  user: 'siddik',
  password: 'siddik',
  database: 'sampledb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (css, js, images, index.html) from project root
app.use(express.static(path.join(__dirname, '..')));

// Handle GET / — serve index.html manually (optional)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Form submission handler
app.post('/submit', (req, res) => {
  const { name, mobile, email } = req.body;
  const sql = 'INSERT INTO nodeuser (name, mobile, email) VALUES (?, ?, ?)';
  pool.query(sql, [name, mobile, email], (err, result) => {
    if (err) {
      console.error('Insert failed:', err);
      return res.status(500).send('<h2 style="text-align:center;">Failed to submit. Try again.</h2>');
    }
    console.log('User inserted:', result.insertId);
    res.send('<h2 style="text-align:center;">Thanks for submitting!</h2>');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

