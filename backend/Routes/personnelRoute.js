const express = require('express');
const { getPersonnel, addPersonnel, editPersonnel, deletePersonnel } = require('../Controllers/personnelController')

const app = express();

app.get('/api/personnel', getPersonnel);
app.post('/api/personnel/add', addPersonnel);
app.put('/api/personnel/edit/:id', editPersonnel);
app.delete('/api/personnel/delete/:id', deletePersonnel);

module.exports = app;