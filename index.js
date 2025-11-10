const express = require("express");

const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const data = req.body;

  console.log(data);

  res.status(200).json({
    message: "Data received!",
  });
});

app.listen(3000, () => {
  console.log("app is listen on port 3000");
});
