require("dotenv").config({ path: __dirname + "/../.env" });
const express = require("express");
const ctrl = require('../server/controller')
const { SERVER_PORT } = process.env;

const app = express();

//middleware
app.use(express.json());

//endpoints
app.get('/api/parts', ctrl.getParts);

app.post('/api/part', ctrl.addPart);

app.delete('/api/part/:id', ctrl.deletePart);

app.put('/api/part/:id', ctrl.updateFavStatus)

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
