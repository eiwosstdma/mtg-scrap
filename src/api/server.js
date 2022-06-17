"use strict";

const { createServer } = require("node:http");

const run = async () => {
  const port = process.env.API_PORT ?? 3000;
  const address = process.env.API_ADDRESS ?? "localhost";

  const server = createServer();

  server.on("request", (req, res) => {
    res.end("works");
  });

  server.listen(port, address, () => {
    console.log(`Server is actually running on http://${ address }:${ port }`);
  });
};

module.exports = {
  run
};
