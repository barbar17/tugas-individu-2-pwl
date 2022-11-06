const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const personnelRoutes = require('./Routes/personnelRoute')

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//API
app.use(personnelRoutes);

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));