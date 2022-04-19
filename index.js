const cors=require("cors");
const users=require("./routes/users")
const workers=require("./routes/workers")
const connection=require('./db')
const  express = require('express');
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())
connection()
app.use("/api/user",users)
app.use("/api/worker",workers)
// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(` app listening on port ${port}!`))

module.exports = app;
