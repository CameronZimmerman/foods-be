module.exports = (err, req, res, next) => {
  console.log(err.message);
  res.send("something went wrong... " + err);
};
