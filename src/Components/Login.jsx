import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash } from "react-icons/fa";
function Login() {
  return (
    <section className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 pe-0">
            <div className="left animate__animated animate__slideInLeft">
              <img src="assets/hopitalgenius.png" alt="logo" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6 ps-0">
            <div className="right">
              <div className="login-box">
                <div className="logo">
                  <h2 className="log animate__animated animate__fadeIn">
                    Login
                  </h2>
                  <p className="sub animate__animated animate__fadeIn">
                    Log in to your account.
                  </p>
                </div>
                <div className="pass-email">
                  <div className="email animate__animated animate__fadeInLeft ">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                  </div>
                  <div className="password animate__animated animate__fadeInLeft">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password " />
                    <FaRegEyeSlash className="eye-icon" />
                  </div>
                </div>
                <div className="forgot animate__animated animate__fadeIn">
                  Forgot Password?
                </div>

                <button className="login-btn animate__animated animate__fadeInLeft ">
                  Log In
                </button>

                <button className="google-btn animate__animated animate__fadeInLeft">
                  {" "}
                  <FcGoogle className="gIcon" />
                  Log in with Google
                </button>

                <p className="signup animate__animated animate__fadeIn">
                  Don't have an account? <span className="">Sign Up</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
