import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import path from 'path' //for deployment
import { fileURLToPath } from 'url'
//config
dotenv.config()
//database
connectDB()
//esmodulefix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//rest object
const app = express()

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, './client/build'))) //for deployment

//routes
app.use('/api/v1/auth', authRoutes) //api phir version phir auth (ye url pattern ha)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/product', productRoutes)
//rest api
// app.get('/', (req, res) => {
//   res.send('<h1> Hello Maham </h1>')
// })

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html')) // for deployement
})

//Port
const PORT = process.env.Port || 8080 //by default 8080  //env secure krta hai secret files env mein hon g

app.listen(PORT, () => {
  console.log(
    `server is running on ${process.env.DEV_MODE} in ${PORT}`.bgCyan.white,
  ) //color assignation
})
