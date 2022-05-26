const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const authRoute = require("./routes/auth");
const stationRoute = require("./routes/station");
const cors = require("cors");


const port = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB connection successful'))
    .catch((err) => {
        console.log(err)
    })

app.use(cors());
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/station", stationRoute);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})