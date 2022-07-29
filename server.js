import dotenv from 'dotenv'
dotenv.config()
import express from "express"

// Import routes
import updateDoc from './routes/updateDoc.js'

// Port number and app function
const app = express(); 
const PORT = process.env.PORT || 3001


// app config
app.use(express.json({
  verify: (req, res, buffer)=> req['rawBody'] = buffer,
}));
app.use(express.urlencoded({extended: true}));

// Using Routes
app.use("/api/", updateDoc)


app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))
