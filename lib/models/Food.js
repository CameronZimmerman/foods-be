const pool = require("../utils/pool.js");

module.exports = class Food {
  id;
  name;
  tastiness;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.tastiness = row.tastiness;
  }

  static async Insert(body) {
    const { rows } = await pool.query(
      `
      INSERT INTO foods (name, tastiness) VALUES ($1, $2) RETURNING *
    `,
      [body.name, body.tastiness]
    );

    return new Food(rows[0]);
  }
};
