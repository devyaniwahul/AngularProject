
const mysql = require('mysql');

function connect1()
{
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'MyNewPass',
        database: 'gardengoods',
        port: 3307
    })

    connection.connect()
    return connection
}

module.exports = {
    connect1: connect1
}

