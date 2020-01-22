const { Client } = require("pg");

const client = new Client({
    connectionString: "postgresql://localhost/pg-lesson-one"
}); 

client.connect();

async function getStudents() {
    const results = await client.query("SELECT * FROM students");
    console.log(results.rows);
}

async function addStudent(name) {
    const results = await client.query(
        "INSERT INTO students (name) VALUES ($1) RETURNING *",
        [name]
    );
    console.log(results.rows[0]);
}

async function findStudentById(id) {
    const results = await client.query(
        "SELECT name FROM students WHERE id = ($1)",
        [id]
    );
    console.log(results.rows[0]);
}

async function updateStudentById(id, name) {
    const results = await client.query(
        "UPDATE students SET name = ($2) WHERE id = ($1)",
        [id, name]
    );
}

async function deleteStudentById(id, name) {
    const results = await client.query(
        "DELETE FROM students WHERE id = ($1)",
        [id]
    );
}

getStudents().then(() => process.exit(0))