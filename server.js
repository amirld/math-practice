const express = require("express");
const app = express();
var cors = require('cors')

app.use(cors(
    {
        origin: '*'
    }
))


var count = 0;

app.get('/', (req, res) => {
    res.send(`${count}`)
})

app.post("/add", (req, res) => {
    count = count + 1;
    res.send(true);
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});