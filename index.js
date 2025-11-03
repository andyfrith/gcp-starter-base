import express from "express";
const app = express();

app.get("/", (req, res) => {
  const name = process.env.NAME || "GCP Starter Base";
  res.send(`Try again. Hello ${name}!`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`gcp-starter-base: listening on port ${port}`);
});
