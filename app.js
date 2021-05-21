var express = require("express");

var app = express();

var userRouter = require("./routers/users");

var bodyParser = require("body-parser");

var path = require("path");
const { get } = require("http");

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.use("/user", userRouter);

app.listen(3000, function () {
  console.log("Đang kết nối server port 3000!");
});
