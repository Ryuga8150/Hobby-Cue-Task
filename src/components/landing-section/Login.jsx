import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

function Login() {
  return (
    <div className="login-container">
      <div className="header">
        <div className="signin">Sign In</div>
        <div className="joinin">Join In</div>
      </div>
      <div className="providers">
        <div className="provider d-flex align-items-center justify-content-center">
          <div className="google-logo">
            <img src="/google.svg" alt="Google Logo" />
          </div>
          <div className="provider-text">Continue with Google</div>
        </div>
        <div className="provider d-flex align-items-center justify-content-center">
          <div className="facebook-logo">
            <img src="/facebook.svg" alt="Google Logo" />
          </div>
          <span className="provider-text">Continue with Facebook</span>
        </div>
      </div>
      <div className="separator">
        <div className="separator-line" />
        <span className="separator-text">Or connect with</span>
        <div className="separator-line" />
      </div>
      <div className="credentials">
        <div className="input-container d-flex align-items-center justify-content-between">
          <div className="input-label">Email</div>
        </div>
        <div className="input-container d-flex align-items-center justify-content-between">
          <div className="input-label">Password</div>
          <div className="d-flex align-items-center justify-content-center">
            <FaEyeSlash className="password-icon" />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between width-full">
        <div className="d-flex align-items-center">
          <input type="checkbox" className="checkbox" id="remember-me" />
          <label htmlFor="remember-me" className="remember-me-label">
            Remember me
          </label>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <IoMdLock className="lock-icon" />
          </div>
          <span className="forgot-password">Forgot password?</span>
        </div>
      </div>
      <div className="continue-button">Continue</div>
    </div>
  );
}

export default Login;
