import vn from "../images/vietnam 1.png";
import layer from "../images/Layer 1.png";
import "../Components/Login.css";
function Login() {
  return (
    <>
      <div className="register-background">
        <img src={vn} alt="a" />
      </div>
      <form>
        <div className="register-detail-img">
          <img src={layer} alt="a" />
        </div>
        <h2>Sign in to your account</h2>
        <div className="content">
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" placeholder="Your Email" required />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Your Password"
            required
          />
          <br />
        </div>
        <button type="button">Sign in</button>
        <div className="forgot">
          <a href="forgotpassword.html">Forgot password</a>
        </div>
        <p>
          Already have an account? <a href="register.html">Sign up</a>
        </p>
      </form>
    </>
  );
}
export default Login;
