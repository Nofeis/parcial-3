import mysql from "promise-mysql"

import config from "./../config.js"

const connection = mysql.createConnection({
    host : config.host,
    database : config.host,
    user : config.host,
    password : config.host,
});

const getConnection = () => {
    return connection
}

export default getConnection;