const express = require('express');
const router = express.Router();
const controller = require('../controllers/takeController')
const request = require("request");
const fs = require('fs');
const data = require('../data/data.json')

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

request.get({
    "headers": 
        { 
            "content-type": "application/json",
            "User-Agent" : "takeapi"
        },
    // "url": "https://api.github.com/orgs/takenet/repos?sort=created&direction=asc",
    "url": "https://reqbin.com/echo/get/json",
    "body": JSON.stringify({
        "firstname": "Nic",
        "lastname": "Raboy"
    })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }

    var dataJson = data;
    console.log(dataJson);

    multiplyES6(dataJson)
    

    fs.writeFile("./src/data/takeData.json", JSON.stringify(data), function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("archivo guardado..");
        }
    });
});

const multiplyES6 = (data) => {

    fiveRepos = []

    data.forEach(element => {
        {
            
        }
    });
};

module.exports = router;