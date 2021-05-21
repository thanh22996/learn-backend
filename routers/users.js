var express = require("express");
var router = express.Router();

var users = [
  {
    id: 1,
    name: "thanhns",
    password: "123",
    address: "Chung cư Chương Dương Home",
  },
  {
    id: 2,
    name: "namnt",
    password: "123",
    address: "Chung cư Home",
  },
  {
    id: 3,
    name: "tuanna",
    password: "123",
    address: "Landmark",
  },
  {
    id: 4,
    name: "MinhBui",
    password: "123",
    address: "KTX khu B",
  },
];

// Hiển thị toàn bộ users
router.get("/", function (req, res) {
  res.json({
    message: "Hiển thị danh sách người dùng thành công",
    data: users,
  });
});

// Hiển thị user theo id
router.get("/:id", function (req, res) {
  var dataUser = users.filter((userItem) => {
    return userItem.id === parseInt(req.params.id);
  });
  if (dataUser.length) {
    res.json({
      message: "Hiển thị user thành công",
      data: dataUser,
    });
  } else {
    res.json({
      message: "Người dùng không tồn tại",
    });
  }
});

// Thêm mới 1 user vào data
router.post("/", function (req, res) {
  var id = parseInt(req.body.id);
  var name = req.body.name;
  var password = req.body.password;
  var address = req.body.address;
  var dataUser = users.filter((userItem) => {
    return userItem.name === req.body.name;
  });
  if (dataUser.length) {
    res.json({
      message: "Người dùng đã tồn tại trong hệ thống",
    });
  } else {
    users.push({
      id: id,
      name: name,
      password: password,
      address: address,
    });
    res.json({
      message: "Thêm người dùng thành công!",
    });
  }
});

module.exports = router;
