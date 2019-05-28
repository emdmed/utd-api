var express = require("express");
var router = express.Router();


const api_handler = require("../handlers/api_handler");

router.post("/utd_links", async (req, res)=>{
    let data = req.body;
    let results;
    console.log("Route utd_links: ", data);
    
    try{
        results = await api_handler.getLinks(data);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).send(results);
    }catch(error){
        console.log(error);
        res.status(404).send("oh noes! - Error");
    }
})

module.exports = router;
