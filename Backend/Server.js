import express from 'express'
import colors from 'colors';
import { notFound, errorHandler} from './middleware/errorMiddleware.js';
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/userRoutes.js'
dotenv.config()

connectDB()

const app=express()

app.use(express.static("public"))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())
app.use((req,res,next) => {
    console.log('HELLO')
    next()
})

app.get('/',(req,res)=>{
    res.send('API is running ....')
})

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)


app.use(notFound)

app.use(errorHandler)

const PORT=process.env.PORT || 5000

app.listen(PORT, 
    console.log(`Server running in ${process.env.JWT_SECRET} mode on port ${PORT}`
    .yellow.bold))