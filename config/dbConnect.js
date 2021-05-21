const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Kết nối database mongodb thành công!");
});

// Tạo bảng dữ liệu
let Schema = mongoose.Schema;

//Định nghĩa các CỘT (trong mongodb không có cột)
let userSchema = new Schema({
  id: Number,
  name: String,
  password: String,
  address: String,
});

// Định nghĩa collection (tên bảng)
//Tên này khi mongodb chạy thì nó tự động thêm "s" vào sau tên mình đặt
let UserModel = mongoose.model("user", userSchema);

// Tạo 1 bản ghi
UserModel.create({
  id: 1,
  name: "thanhns",
  password: "123",
  address: "Chung cư Chương Dương Home",
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
