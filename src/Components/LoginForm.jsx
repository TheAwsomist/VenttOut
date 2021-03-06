import "../styles/LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <form action="" className=" form">
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="********" name="password" />
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="John.snow@gmail.com" name="email" />
        <div className="rememberdiv">
          <label htmlFor="">
            <input type="checkbox" name="Remember Me" id="remember" /> Remember
            Me
          </label>
          <a
            href=""
            style={{
              textDecoration: "none",
              color: "#2C5282",
              fontWeight: "500",
              marginBottom:"0.6875em"
            }}
          >
            Forgot Password?
          </a>
        </div>
        <Link to="/NewsFeed" style={{width:"100%"}}><button id="loginbutton">Login</button></Link>
      </form>
    </div>
  );
};

export default LoginForm;
