const pool = require("./pool.js");

pool
  .query(
    `
DROP TABLE IF EXISTS foods
CREATE TABLE foods (
  name TEXT NOT NULL,
  tastiness INT NOT NULL,
  id BIGINT GENERATE ALWAYS AS IDENTITY PRIMARY KEY
);
`
  )
  .then(() => console.log("Table made"))
  .catch((err) => console.log(err));
