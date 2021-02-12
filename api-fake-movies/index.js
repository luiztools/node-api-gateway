const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    res.json([{ id: 1, title: 'Star Wars' }, { id: 2, title: 'Senhor dos Anéis' }]);
})

app.listen(3000, () => { console.log('Movies running at 3000') });