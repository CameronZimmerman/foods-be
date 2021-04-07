const app = require("./lib/app.js");

const PORT = process.env.PORT || 7891;

app.listen(PORT, () => {
  console.log("Now listening on port " + PORT);
});
