const express=require('express');
const app=express();
const port=8000;
const cors=require('cors');
const mongoose=require('mongoose');
app.use(cors());
app.use(express.json());

const {BookedSeat}=require('./controllers/SeatsController');

const MONGODB_URL="mongodb+srv://anittapm1708:anittapm@cluster0.ru7auzd.mongodb.net/Movie_Booking?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URL).then(()=>{
    console.log("Connected to DB");
},
(err)=>{
    console.log("Error connecting to DB",err);
});

app.get("/book",BookedSeat);

app.listen(port,()=>{
console.log("server running on port :",port);
})