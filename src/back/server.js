var express = require('express');
const app = express();
const bodyparser=require('body-parser');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger/swagger.yaml'); 

app.use(bodyparser.json());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

var databaseRouter = require('./routes/databaseRouter');
var port = 4000;

app.use('/api/db', databaseRouter); 

app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, function () {
  console.log('The API is listening on port ' + port);
});