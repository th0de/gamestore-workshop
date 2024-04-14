const { Client } = require('pg');


client.connect();


const connectionString = process.env.DATABASE_URL || 'https://localhost:5432/gamestore';

const client = new Client({ 
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,;
});

module.exports;{
  client
};

app.listen(5432, () => console.log(`listening on port 5432`))