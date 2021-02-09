const express = require('express');
const router = express.Router();
const controller = require('../controllers/takeController')
const request = require("request");
const fs = require('fs');
const data = require('../data/data.json');
const { nextTick } = require('process');

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
    const dataSend = manipulateData(dataJson)

    fs.writeFile("./src/data/takeData.json", JSON.stringify(dataSend), function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("archivo guardado..");
        }
    });
});

const manipulateData = (data) => {

    var repositories = [];
    data.forEach(element => {
        if (data.indexOf(element) < 5) {
            repositories.push({
                "header": {
                    "type": "application/vnd.lime.media-link+json",
                    "value": {
                        "title": element.name,
                        "text": element.description,
                        "type": "image/png",
                        "uri": "https://avatars.githubusercontent.com/u/4369522?s=200&v=4"
                    }
                }
            });
        } else {
            return false;
        }
    });

    var fiveRepositories = {
        "itemType": "application/vnd.lime.document-select+json",
        "items": repositories
    }

    return fiveRepositories;
};

module.exports = router;