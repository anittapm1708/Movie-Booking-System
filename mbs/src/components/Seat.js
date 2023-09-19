import '../css/Seat.css';
const Seat=(props)=>{
    const handleClick=()=>{
        props.handleBooking(props.id);
        console.log("Seat clicked");
    }
    return(
        <div className="seats">
            <button className="seat" onClick={handleClick}></button>
        </div>
    )
}
export default Seat;