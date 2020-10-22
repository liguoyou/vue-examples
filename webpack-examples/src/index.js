// 引入 css
import "./assets/style/common.css";
import "./assets/style/index.css";
// import "./assets/style/module.scss";
import logo from "./assets/images/logo.png";
console.log("main.js");
console.log(logo);

// 模拟请求
import axios from "axios";
axios
  .get("/api/info")
  .then((res) => {
    console.log("res==>", res);
  })
  .catch((err) => {
    console.log("err==>", err);
  });
