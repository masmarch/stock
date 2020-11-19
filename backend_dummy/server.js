const express = require('express'); //for check request and how do handle and manage?
const app = express();
const cors = require("cors") // สำหรับการเข้าถึงทุกรีเควสหรือบาง Rout

app.use(cors())
app.use(express.static(__dirname + "/uploaded")) // another can view this path

app.use("/api/v2",require("./api"))

app.listen(8081,()=>{
  console.log("Server is running...")
})

