const express = require("express");
const app = express();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Hey, I am listening the port ${port} `);
});
