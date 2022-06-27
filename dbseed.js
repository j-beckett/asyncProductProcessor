//this imports the postgres connector into the file so it can be used
const { Client } = require('pg');

//instantiates a client to connect to the database, connection settings are passed in
const client = new Client({
    user: 'postgres',
    host: 'sespe-test-2.chtwubdr7alu.us-west-2.rds.amazonaws.com',
    database: 'sespe-sync-1',
    password: 'postgres',
    port: 5555
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