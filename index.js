const express = require('express')
const app = express();
const shell = require('shelljs')
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post("/run", (req, res) => {

    const params = req.body;    
    console.log("Body: ", params);
    //Run the sh script
    shell.exec(`./run.sh ${params.config1} ${params.config2}`);
    res.sendStatus(200);
})

app.listen(3000, () => {
    console.log("application started");
});