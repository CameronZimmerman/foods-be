module.exports = (err, req, res, next) => {
  console.error("Page not found, try again");
  req.status(404).then(() => res.send("Page not found"));
};
