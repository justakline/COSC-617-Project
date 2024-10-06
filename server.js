import connectDB from './backend/config/db.js'
import userRoutes from './backend/routes/userRoute.js'
import messageRoutes from './backend/routes/messageRoute.js'
import authRoutes from './backend/routes/authRoute.js'
import express from 'express'
import dotenv  from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import bodyParser from 'body-parser'
console.log("here")
//connect database
connectDB()

//dotenv config
dotenv.config()

const app = express()

app.use(
    cors({
      origin: ["http://localhost:5000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );


app.use(cookieParser());

app.use(express.json());

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

//Creating API for user
app.use('/api/users', userRoutes)

//Creating API for message
app.use('/api/messages', messageRoutes)

//Creating API for authentication
app.use('/', authRoutes)

const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
