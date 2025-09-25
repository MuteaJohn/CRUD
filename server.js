import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import route from './routes/userRoute.js'


const app = express();
app.use(cors());

app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;

connectDB();



app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})


app.use('/api/user', route);