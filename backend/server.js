require("dotenv").config({

})
const app = require("./src/app");
const {PUBLIC_DATA} = require("./constant");
const {ConnectDB} = require("./src/config/db.config");
ConnectDB()


app.listen(PUBLIC_DATA.port,()=> {
    console.log(`the app is listen at http://localhost:${PUBLIC_DATA.port}`);
})
