const express = require("express");
const app = express();
require("./db/db");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

const articleModel = require("./routes/routers/article");
const categoryModel = require("./routes/routers/category");

app.use(cors());

app.use(articleModel);
app.use(categoryModel);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
