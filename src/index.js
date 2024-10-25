import 'dotenv/config'
import express from "express"
import connectDB from "./db/index.js"
import Blog from './routes/blog.route.js'
import cors from 'cors'

const app = express();

const corsOptions = {
    origin: 'https://amitdevdiary.vercel.app',
    methods: "GET, POST, PATCH, DELETE",
    credential: true
  }
app.use(cors(corsOptions))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://amitdevdiary.vercel.app'); 
  res.header('Access-Control-Allow-Credentials', 'true'); 
  res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
  next();
});
app.options('*', cors(corsOptions))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

connectDB()
.then(()=>{
    console.log("- - MongoDB Connected - -");
    app.listen(process.env.PORT,()=>{
        console.log(`- - SERVER STARTED ON PORT : ${process.env.PORT} - -`);
    })
}
).catch((err)=>{
    console.error("MongoDB connection failed :- ",err);
})

app.use("/blog", Blog)
