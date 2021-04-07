module.exports = () => {
  const pool = require("./pool.js");

  pool
    .query(
      `
    DROP TABLE IF EXISTS "foods";
    CREATE TABLE foods (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    tastiness INT NOT NULL
    );
    `
    )
    .then(() => console.log("Table made"))
    .catch((err) => console.log(err));
};
