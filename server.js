const express = require("express");
const app = express();
require("./db/db");
const cors = require("cors");

app.use(express.json());

const articleModel = require("./routes/routers/article");

app.use(cors());
app.use(articleModel);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
