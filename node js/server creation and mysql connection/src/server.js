// src/server.js
const app = require('./app');
const port = 3000;


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
 module.exports=app; 