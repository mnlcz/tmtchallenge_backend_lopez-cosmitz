const express = require("express");
const cors = require("cors");
const posts = require("./routes/posts.js");
const user = require("./routes/user");
const auth = require("./routes/auth");
const db = require("./db/database");

const app = express();
const port = process.env.PORT || 3131;

// db test
(async () => {
    try {
        await db.authenticate();
        await db.sync();
        console.log("Conectados a la base de datos");
    } catch (err) {
        throw new Error(err);
    }
})()

app.use(express.json());
app.use(cors());
app.use(posts);
app.use(user);
app.use(auth);

app.listen(port, () => {
    console.log(`Servidor corriendo en ${port}`);
})

