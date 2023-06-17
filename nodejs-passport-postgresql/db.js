//db.js
async function connect() {
    if (global.connection)
        return global.connection.connect();

    const pg = require('pg');
    pg.defaults.ssl = {
        rejectUnauthorized: false,
    }
    const pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL
    });

    /*const fs = require('fs');
    const pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
            ca: fs.readFileSync('./certs/ca-certificate.crt').toString()
        }
    });*/

    const client = await pool.connect();

    //apenas testando a conexão
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    //guardando para usar sempre o mesmo pool
    global.connection = pool;
    return pool.connect();
}

async function findUser(username) {
    const conn = await connect();
    const res = await conn.query(`SELECT * FROM users WHERE username=$1 LIMIT 1`, [username]);

    if (res.rows.length > 0)
        return res.rows[0];
    else return null;
}

async function findUserById(id) {
    const conn = await connect();
    const res = await conn.query(`SELECT * FROM users WHERE id=$1 LIMIT 1`, [id]);
    if (res.rows.length > 0)
        return res.rows[0];
    else return null;
}

module.exports = { connect, findUser, findUserById }