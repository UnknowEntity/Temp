const app = require("express")();
const bodyParser = require("body-parser");
const httpServer = require("http").Server(app);

const { PORT } = process.env || 3000;

app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  console.log(req.hostname);
  res.json({ status: 200 });
});

httpServer.listen(PORT, () =>
  console.info(`Express server running on ${PORT}...`)
);
