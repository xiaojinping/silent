'use strict';

const app = require('./app.js');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

