require("dotenv").config()

const express = require("express");
const app = express();
const cors = require("cors");

/* This is requiring the connection.js file in the backend folder. */
const pool = require(".backend/connection");

const PORT = process.env.PORT || 4000

app.use(express.json());
/* This is serving the build folder and is used for deployment purposes. */
app.use(express.static("build"));

app.use(cors());

/* This is a callback function that is listening for a port to be assigned. If there is an error, it
will log the error. If there is no error, it will log the port number. */
app.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`Listening on port: ${PORT}`);
})

/* This is a get all request to the users table. */
app.get("/users", async (req,res) => {
    try {
        let client = await pool.connect();
        const data = await client.query('SELECT * FROM users;');
        res.send(data.rows);
        client.release();
    } catch (error) {
        console.error(error);
        res.send(error);
    }
});

/* This is a get request to the users table. It is using the user_id as a parameter to get one select user. */
app.get("/users/:id", async (req,res) => {
    try {
        let client = await pool.connect();
        const data = await client.query("SELECT * FROM users WHERE user_id=$1", [req.params.id]);
        res.json(data.rows[0]);
        client.release();
    } catch (error) {
        console.error(error)
    }
});

/* This is a post request to the users table. It is using the name, password, university_id, email, and
role as parameters to insert a new user. */
app.post("/users", async (req,res) => {
    try {
        let client = await pool.connect();
        const data = client.query("INSERT INTO users(name, password, university_id, email, role) VALUES($1, $2, $3, $4, $5)", [req.body.name, req.body.password, req.body.university_id, req.body.email, req.body.role]);
        res.send(req.body);
        client.release();
    } catch (error) {
        console.error(error)
    }
});

app.patch("users", async (req,res) => {
    try {
        let client = await pool.connect();
        const {
            name,
            password,
            university_id,
            email,
            role
        } = req.body;
        const data = await client.query("SELECT * FROM users WHERE user_id = $1", [req.params.id])
        const updateDB = {
            name: name || data.rows[0].name,
            password: password || data.rows[0].password,
            university_id: university_id || data.rows[0].university_id,
            email: email || data.rows[0].email,
            role: role || data.rows[0].role,
        };

        const updateUsers = await client.query("UPDATE users SET name = $1, password = $2, university_id = $3, email = $4, role = $5 WHERE user_id = $6 RETURNING *", [updateDB.name, updateDB.password, updateDB.university_id])
    } catch (error) {
        console.error(error)
    }
});

app.delete();
