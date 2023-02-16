import express from 'express';

// Setting up the server
const app = express();

// For parsing application/json
app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export { app };