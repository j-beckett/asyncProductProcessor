//this imports the postgres connector into the file so it can be used
const { Pool } = require('pg');

//imports the AWS Postgres DB credentials from the .env file 
require('custom-env').env();

//instantiates a client to connect to the database, connection settings are passed in
const client = new Pool({
    user: process.env.POSTGRESQL_DB_USER,
    host: process.env.POSTGRESQL_DB_HOST,
    database: process.env.POSTGRESQL_DB,
    password: process.env.POSTGRESQL_DB_PASSWORD,
    port: process.env.POSTGRESQL_DB_PORT
});

//

async function insertData(productData){

    // const response = await client.query(
    //     "INSERT INTO public.Node_Products_Test (product_id, category, name, brand, price_type, price) VALUES ($1, $2, $3, $4, $5, $6)",
    //     productData
    // );

    str = "public.Customers";
    const response = await client.query(
        "SELECT * FROM " + str
    );

    console.log(response);

    console.log("Inserted a new product into the table.")
}

qwerty = async (product) => {

    console.log(product);
    try {
        await client.connect();
        console.log("Connected Successfully");


        try {
            await insertData(product);
        }

        catch (err) {
            console.log("error upserting into the PG table")
            throw err;
        }
        //your code here

    } catch (err) {

        console.log("Failed to Connect");
        throw err;
        //error message
    }

    client.end();

};

qwerty([1,2]);

module.exports = {qwerty};