const express = require('express')
const dirToJson = require('dir-to-json');
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors({
    origin: "*",
}))

app.use(express.static('public'))

app.get('/directories', (req, res) => {
    dirToJson("public", (err, dirTree) => {
        if (err) {
            console.log(err);
        } else {
            res.json(dirTree)
        }
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
