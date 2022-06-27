//this imports the postgres connector into the file so it can be used
const { Client } = require('pg');
require('custom-env').env();


console.log();
console.log();
//instantiates a client to connect to the database, connection settings are passed in
const client = new Client({
    user: process.env.POSTGRESQL_DB_USER,
    host: POSTGRESQL_DB_HOST,
    database: POSTGRESQL_DB,
    password: POSTGRESQL_DB_PASSWORD,
    port: process.env.POSTGRESQL_DB_PORT
});

//the lambda funtion code
qwerty = async (event, context, callback) => {

    try {
        await client.connect();
        console.log("Connected Successfully");
        //your code here

    } catch (err) {

        console.log("Failed to Connect Successfully");
        throw err;
        //error message
    }

    client.end();

};

qwerty();