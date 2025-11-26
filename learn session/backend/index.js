import express from "express"
import session from "express-session";
import web from "./routes/web.js";


const app = express();

app.use(session({
    name: "piyushsession",
    secret: "iamkey",
    resave: false,
    saveUninitialized: true,
    cookie : {maxAge: 20000}
}))

app.use("/", web);



app.listen(3000, () => {
    console.log("Server is running ion 3000 port")
})