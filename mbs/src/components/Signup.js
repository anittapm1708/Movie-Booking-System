import {  useState } from 'react';
import '../signup.css'
const Signup=()=>{
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("")

    const handleSubmit=(event)=>
    {
        event.preventDefault()
        const user = {
            username,
            email,
            password,
        }
        setEmail("")
        setUsername("")
        setPassword("")
        fetch("http://localhost:8000/register",{
          method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
        .then((data)=>{
            if(data.success){
                console.log('signup successful',data)

            }
            else{
                console.log('signup failed')
            }
        })
        .catch((err)=>{
          console.error('error:',err)
        })
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input required type='text' value={username}  onChange={(e)=>setUsername(e.target.value)}/>
            <label>Email</label>
            <input required type='text' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            <label>Password</label>
            <input required type='text' value={password}  onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Signup</button>
            <p>Already Created ?<a href="/login">Login</a></p>
          </form>
        </div>
      )
}
export default Signup