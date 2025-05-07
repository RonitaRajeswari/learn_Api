import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'express'
import userRouter from './routes/user.js'
import contactRouter from './routes/contact.js'

const app = express();

app.use(bodyParser.json())
app.use('/api/user', userRouter )
app.use('/api/contact', contactRouter )


//home route
app.get('/', (req,res) => {
    res.json({message:'This is home route'})
})





 
mongoose.connect("mongodb+srv://rajeswarimahapatra40:onXaow2NFUJ125M6@cluster0.oliutah.mongodb.net/",{
    dbName:"nodeJSLearn"
}).then(() => console.log("MongoDb Connected ..!")).catch((err) => console.log(err))

const port = 3000;
app.listen(port, ()=>console.log(`server is running on port ${port}`));