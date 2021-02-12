const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    res.json([{ id: 1, title: 'Bourbon Ipiranga' }, { id: 2, title: 'IMAX Assis Brasil' }]);
})

app.listen(3001, () => { console.log('Cinemas running at 3001') });