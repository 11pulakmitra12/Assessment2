const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors())
app.use(bodyParser.json())
require('./routes/route.validateToken')(app)


const port = process.env.PORT || 3001


module.exports=app.listen(port, () => console.log(`Server running on port ${port}`))