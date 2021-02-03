const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5001;
const api_handler = require("./handlers/api_handler");
const cors = require("cors")


//app.use(express.static(__dirname + "/test"));
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//ROUTES
const text_routes = require("./routes/text-routes");
app.use("/text", text_routes);

app.listen(port, function(){
    console.log("Running...port " + port);
});
