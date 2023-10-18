import exprees from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";

dotenv.config();
const app = exprees();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch(error){
    console.error(error)
}

app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(exprees.json());
app.use(router);

app.listen(5000, ()=> console.log('Server Running'));