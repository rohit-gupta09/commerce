import mongoose from 'mongoose'

const connectDB = async () =>{
    try{
        // const conn = await mongoose.connect(process.env.MONGO_URI)
        const conn = await mongoose.connect("mongodb+srv://gupta2002rohit:rKmxwcWjr3uyuMz8@testing.gzaod4z.mongodb.net/")

        console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline)
    }catch(error){
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

export default connectDB