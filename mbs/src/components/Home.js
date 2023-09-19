const Home=()=>{
    return (
      <div className="login-box">
        <form>
          <label for="Username">Username</label>
          <input type="text" placeholder="Username" />
          <label for="Email">Email</label>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
          <input type="password" placeholder="Password" />
        </form>
      </div>
    );
}
export default Home;