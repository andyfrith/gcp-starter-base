import express from "express";
const app = express();

app.get("/", (req, res) => {
  const name = process.env.NAME || "World";
  res.send(`Hello ${name}!`);
});

app.get("/andy", (req, res) => {
  res.send(`Hello Andy!`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`gcp-starter-base: listening on port ${port}`);
});
