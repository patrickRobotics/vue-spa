const express = require("express");
const app = express();

app.get("*", (req, res) => {
  res.write("hey there!");
  res.send();
});

const port = process.env.PORT || 3001;
const host = process.env.HOST || "http://localhost";

app.listen(port, () => {
  console.log(`server listening on port ${host}:${port}`);
});
