var express = require('express');
var app = express();
const bodyparser=require('body-parser');

/* const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./src/Swagger/swagger.yaml'); */
app.use(bodyparser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  next();
});

var databaseRouter = require('./routes/databaseRouter');
var port = 3000;

app.use('/api/db', databaseRouter); 

//app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, function () {
  console.log('The API is listening on port ' + port);
});
