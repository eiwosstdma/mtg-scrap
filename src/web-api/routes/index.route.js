const indexRoute = (req, res) => {
  res.send(JSON.stringify({ hello: "world" }));
};

module.exports = {
  indexRoute
};
