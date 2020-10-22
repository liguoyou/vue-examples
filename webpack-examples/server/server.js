const express = require("express");
const app = express();

app.get("/api/info", (req, res) => {
  res.json({
    code: 0,
    data: {
      success: true,
    },
  });
});

app.listen("3000");
console.log("server runing at: http://localhost:3000");
