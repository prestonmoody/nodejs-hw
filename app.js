const express = require('express');
const app = express();
const port = process.env.PORT || 8000; //EB will pick default env value 8080 if not mentioned in configuration.

app.get('/', (req, res) => res.send('<h1>Hello DevOps on dev!</h1>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
