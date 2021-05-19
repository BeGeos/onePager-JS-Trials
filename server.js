const express = require("express");
const bodyParser = require("body-parser");

// example data

data = {
  userInfo: {
    name: "Marc Mason",
    age: 33,
  },

  otherInfo: {
    name: "Frigg Juno",
    age: 31,
  },

  outdoorInfo: {
    name: "Julie Meadows",
    age: 25,
  },
};

app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/api/:user", (req, res) => {
  let query = req.params.user;
  let user = data[query];

  res.json({ user });
});

app.listen(3000, () => console.log("Listening on port 3000..."));
