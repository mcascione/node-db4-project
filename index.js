const server = require("./server");
const env = require("dotenv").config();

const port = process.env.PORT || 9000;

server.use("*", (req, res) => {
  res.status(404).send(`404 Error: Page does not exist`);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
