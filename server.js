const app = require("./lib/app.js");

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  console.log("Now listening on port" + PORT);
});
