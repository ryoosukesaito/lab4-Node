const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

/* ---------------------------- setups and config --------------------------- */
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//install ejs
app.set("view engine", "ejs");
app.set("views", "src/views");

app.get('')



/* ------------------------------- middleware ------------------------------- */
app.use("/api/members", require("./routes/members"));

app.get("/", (req, res) => res.json({ msg: "Health Check" }));

app.use((req, res) => res.sendFile(path.join(__dirname, "public", "404.html")));

/* -------------------------------- listener -------------------------------- */
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
