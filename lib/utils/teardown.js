module.exports = () => {
  const pool = require("./pool.js");

  pool.end();
};
