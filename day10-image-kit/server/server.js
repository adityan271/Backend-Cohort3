import app from './src/app.js'
import connectDB from './src/config/db.config.js'

connectDB()
const port = 3000

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})