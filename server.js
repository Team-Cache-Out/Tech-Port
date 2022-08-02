require("dotenv").config()
const path = require('path')
const express = require("express");
const app = express();
const cors = require("cors");

/* This is requiring the connection.js file in the backend folder. */
const pool = require("./db/connection");

const PORT = process.env.PORT || 4500

app.use(express.json());
/* This is serving the build folder and is used for deployment purposes. */
app.use(express.static("build"));

app.use(cors());

/* This is a callback function that is listening for a port to be assigned. If there is an error, it
will log the error. If there is no error, it will log the port number. */
app.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`Listening on port: ${PORT}`);
    console.log(`${process.env.DATABASE_URL}`)
})

//! USERS TABLE ROUTES ------------------------------------------------------------------------------------
/* This is a get all request to the users table. */
app.get("/users", async (req,res) => {
    try {
         /* Connecting to the database. */
        let client = await pool.connect();

        const data = await client.query('SELECT * FROM users;');
        res.send(data.rows);

        /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.error(error.message);
        res.send(error.message);
    }
});

/* This is a get request to the users table. It is using the user_id as a parameter to get one select user. */
app.get("/users/:id", async (req,res) => {
    try {
         /* Connecting to the database. */
        let client = await pool.connect();

        const data = await client.query("SELECT * FROM users WHERE user_id=$1", [req.params.id]);
        res.json(data.rows[0]);

        /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.error(error)
    }
});

// Checks login form input and compares users data to match 
app.post("/users/login", async (req, res) => {
    try {
         /* Connecting to the database. */
        let email = req.body.email
        let password = req.body.password
        console.log(`${email} and ${password}`)
        let client = await pool.connect();
        
        const data = await client.query(`SELECT * FROM users WHERE email = $1 AND password = $2`, [email, password]);
        console.log(data.rows)
        res.json(data.rows);

        /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.log(error)
    }
});

/* This is a post request to the users table. It is using the name, password, university_id, email, and
role as parameters to insert a new user. */
app.post("/users/signup", async (req,res) => {
    try {
         /* Connecting to the database. */
        let client = await pool.connect();
        
        await client.query(`
            INSERT INTO users (
            name, password, university_id, email, role
            )
            VALUES ($1, $2, $3, $4, $5)
            `, [req.body.name, req.body.password, req.body.university_id, req.body.email, req.body.role]);
        res.json(`Signed Up`);

        /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.error(error)
    }
});


/* This is a patch request to the users table. It is using the name, password, university_id, email,
and role as parameters to update a user. */
app.patch("users/:id", async (req,res) => {
    try {
        /* Connecting to the database. */
        let client = await pool.connect();

        /* Destructuring the req.body. */
        const {
            name,
            password,
            university_id,
            email,
            role
        } = req.body;

        /* This is a get request to the users table. It is using the user_id as a parameter to get one
        select user. */
        const data = await client.query("SELECT * FROM users WHERE user_id = $1", [req.params.id]);

       /* This is a ternary operator. It is saying if the input parameter is not null, then use the input parameter. If the input parameter is null, then use the data.rows[0].parameter that is already stored in the database. */
        const updateDB = {
            name: name || data.rows[0].name,
            password: password || data.rows[0].password,
            university_id: university_id || data.rows[0].university_id,
            email: email || data.rows[0].email,
            role: role || data.rows[0].role,
        };

        /* This is a query to the users table. It is updating the name, password, university_id, email,
        and role where the user_id is equal to the user_id that is being passed in. It is returning
        all of the columns. */
        const updateUsers = await client.query("UPDATE users SET name = $1, password = $2, university_id = $3, email = $4, role = $5 WHERE user_id = $6 RETURNING *", [updateDB.name, updateDB.password, updateDB.university_id, updateDB.email, updateDB.role, req.params.id]);
        res.json(updateUsers.rows[0]);

        /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.error(error)
    }
});

/* This is a delete request to the users table. It is using the user_id as a parameter to delete a user. */
app.delete("users/:id", async (req,res) => {
    try {
        /* Connecting to the database. */
        const client = await pool.connect();

        const data = await client.query("DELETE FROM users WHERE user_id = $1;", [req.params.id]);
        res.json(data.rows);

        /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.error(error)
    }
});

//!--------------------------------------------------------------------------------------------------------

//! TICKETS TABLE ROUTES ----------------------------------------------------------------------------------

/* This is a get all request to the tickets table. */
app.get("/tickets", async (req,res) => {
    try {
         /* Connecting to the database. */
        let client = await pool.connect();

        const data = await client.query('SELECT * FROM tickets;');
        res.send(data.rows);

        /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.error(error);
        res.send(error);
    }
});

/* This is a get request to the tickets table. It is using the ticket_id as a parameter to get one
select ticket. */
app.get("/tickets/:id", async (req,res) => {
    try {
         /* Connecting to the database. */
        let client = await pool.connect();

        const data = await client.query("SELECT * FROM tickets WHERE ticket_id=$1", [req.params.id]);
        res.json(data.rows[0]);

        /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.error(error)
    }
});

/* This is a post request to the tickets table. It is using the close_date, open_date, problem,
description, notes, point_of_contact, location, priority, status, assigned_tech, and university_id
as parameters to insert a new ticket. */
app.post("/tickets", async (req,res) => {
    try {
         /* Connecting to the database. */
        let client = await pool.connect();
        
        const data = client.query("INSERT INTO tickets(close_date, open_date, problem, description, notes, point_of_contact, location, priority, status, assigned_tech, university_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", [req.body.close_date, req.body.open_date, req.body.problem, req.body.description, req.body.notes, req.body.point_of_contact, req.body.location, req.body.priority, req.body.status, req.body.assigned_tech, req.body.university_id]);
        res.send(req.body);

        /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.error(error)
    }
});

/* This is a patch request to the tickets table. It is using the close date, open date, problem, description,
notes, point of contact, location, priority, status, assigned tech, and university id as parameters to update a ticket. */
app.patch("tickets/:id", async (req,res) => {
    try {
        /* Connecting to the database. */
        let client = await pool.connect();

        /* Destructuring the req.body. */
        const {
            close_date,
            open_date,
            problem,
            description,
            notes,
            point_of_contact,
            location,
            priority,
            status,
            assigned_tech,
            university_id
        } = req.body;

        /* This is a query to the tickets table. It is selecting all of the columns where the ticket_id
        is equal to the ticket_id that is being passed in. */
        const data = await client.query("SELECT * FROM tickets WHERE ticket_id = $1", [req.params.id]);

       /* This is a ternary operator. It is saying if the input parameter is not null, then use the input parameter. If the input parameter is null, then use the data.rows[0].parameter that is already stored in the database. */
        const updateDB = {
            close_date: close_date || data.rows[0].close_date,
            open_date: open_date || data.rows[0].open_date,
            problem: problem || data.rows[0].problem,
            description: description || data.rows[0].description,
            notes: notes || data.rows[0].notes,
            point_of_contact: point_of_contact || data.rows[0].point_of_contact,
            location: location || data.rows[0].location,
            priority: priority || data.rows[0].priority,
            status: status || data.rows[0].status,
            assigned_tech: assigned_tech || data.rows[0].assigned_tech,
            university_id: university_id || data.rows[0].university_id,
        };

        /* Updating the close_date, open_date, problem, description, notes, point_of_contact, location,
        priority, status, assigned_tech, and university_id where the ticket_id is equal to the
        ticket_id that is being passed in. It is returning all of the columns. */
        const updateUsers = await client.query("UPDATE tickets SET close_date = $1, open_date = $2, problem = $3, description = $4, notes = $5 point_of_contact = $6, location = $7, priority = $8, status = $9, assigned_tech = $10, university_id = $11 WHERE ticket_id = $12 RETURNING *", 
        [
            updateDB.close_date, 
            updateDB.open_date, 
            updateDB.problem, 
            updateDB.description, 
            updateDB.notes,
            updateDB.point_of_contact,
            updateDB.location,
            updateDB.priority,
            updateDB.status,
            updateDB.assigned_tech,
            updateDB.university_id,
            req.params.id,
        ]);
        res.json(updateUsers.rows[0]);

        /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.error(error)
    }
});

/* This is a delete request to the tickets table. It is using the ticket_id as a parameter to delete a
ticket. */
app.delete("tickets/:id", async (req,res) => {
    try {
        /* Connecting to the database. */
        const client = await pool.connect();

        const data = await client.query("DELETE FROM tickets WHERE ticket_id = $1;", [req.params.id]);
        res.json(data.rows);

        /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.error(error)
    }
});

//!--------------------------------------------------------------------------------------------------------

//! UNIVERSITY TABLE ROUTES -------------------------------------------------------------------------------

/* The below code is connecting to the database and then querying the database for all the data in the
university table. */
app.get("/universities", async (req,res) => {
    try {
         /* Connecting to the database. */
        let client = await pool.connect();

        const data = await client.query('SELECT * FROM universities;');
        res.json(data.rows);

        /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.error(error);
        res.send(error);
    }
});


/* The below code is a GET request that is retrieving data from the database. */
app.get("/university/:id", async (req,res) => {
    try {
         /* Connecting to the database. */
        let client = await pool.connect();

        const data = await client.query("SELECT * FROM universities WHERE university_id=$1", [req.params.id]);
        res.json(data.rows[0]);

        /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.error(error)
    }
});

/* The below code is a GET request that is retrieving data from the database. It should return an array of 
University objects with a count of tickets and techs pre sorted by the number of open tickets */
app.get("/universities/ticketstechs", async (req,res) => {
    try {
         /* Connecting to the database. */
        let client = await pool.connect();

        const data = await client.query(`SELECT universities.name, universities.logo_url, 
        COUNT(tickets.ticket_id) AS ticket_num FROM universities INNER JOIN tickets ON universities.university_id = tickets.university_id 
        GROUP BY universities.name, universities.logo_url ORDER BY ticket_num DESC;`)
        console.log(data.rows)        
        res.json(data.rows[0]);
        /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.error(error)
    }
});



//!--------------------------------------------------------------------------------------------------------

//! CAMPUS INFORMATION ROUTES -----------------------------------------------------------------------------

/* The below code is connecting to the database and then querying the database for the data. */
app.get("/campus/:id", async (req,res) => {
    try {
         /* Connecting to the database. */
         let client = await pool.connect();

         const data = await client.query("SELECT * FROM users, tickets WHERE users.university_id = $1 AND tickets.university_id = $1;", [req.params.id]);
         res.json(data.rows[0])

         /* Releasing the client from the database. */
        client.release();
    } catch (error) {
        console.error(error)
    }
})

//!--------------------------------------------------------------------------------------------------------

app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html"));
});