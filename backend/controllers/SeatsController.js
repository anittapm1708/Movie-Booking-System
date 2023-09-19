const Seats = require('../models/Seats');

const BookedSeat = (req, res) => {
    Seats.findById({seat_id:req.params.id}).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.send(err);
    })
}
const setAvailable =(req,res)=>{
    const _seats=Seats
    .create({seat_id:req.params.seat_id,seat_status:`available`})
}
module.exports={BookedSeat}