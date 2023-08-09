const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const cors = require("cors");

// connect
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
  res.json({"message":"successful"})
})

app.use("/", routes);

app.use((error, req, res, next) => {
  console.log("global --- ", error);
  res.status(500).json({
    error: error.message,
  });
});

app.listen(PORT, () => {
  console.log("Server is listening on Port:", PORT);
});