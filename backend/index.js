import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"

const app = express()

dotenv.config()
app.use(cors())


const port = process.env.PORT || 4000
const URI = process.env.MongoDBURI 

try {
  mongoose.connect(URI)
  console.log('Connected to MongoDB successfully ');
  
} catch (error) {
  console.log(error)
}

app.use(express.json())
app.use('/book',bookRoute)
app.use('/user',userRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
