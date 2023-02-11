import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"

///////////////////
// Configurations
///////////////////


dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


//////////////
// Routes
//////////////
app.use("/auth", authRoutes);


const PORT = process.env.PORT || 4001 ;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()  => {
    app.listen(PORT , () => {
        console.log(`Server running on port: ${PORT}`);
    });
}).catch((error) => console.log(`${error} did not connect`));