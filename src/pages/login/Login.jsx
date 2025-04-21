import "./login.scss";
import GoogleIcon from "../../assets/images/google-icon.png";
import { useState } from "react";
import Register from "../../components/register/Register"; // ✅ Import the Register Popup


const Login = () => {
  const [showRegister, setShowRegister] = useState(false);


  const handleGoogleLogin = () => {
    // 🔐 You would normally handle Google sign-in here


    // Simulate successful login
    const isFirstTime = !localStorage.getItem("hasRegistered");
    if (isFirstTime) {
      setShowRegister(true); // ✅ Show Register popup
    } else {
      window.location.href = "/"; // Redirect to homepage if already registered
    }
  };


  const handleRegisterSuccess = () => {
    // 🔒 Save flag to prevent register page next time
    localStorage.setItem("hasRegistered", "true");
    setShowRegister(false);
    window.location.href = "/"; // Redirect to homepage after registration
  };


  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <div className="image-overlay"></div>
          <h1>
            <span className="welcome-text">Welcome</span> to
            <br />
            LNMIIT Campus Connect.
          </h1>
          <p>
            An exclusive platform for LNMIIT students, alumni, and faculty.
            Stay connected, explore opportunities, and build meaningful
            relationships — all in one place.
          </p>
        </div>


        <div className="right">
          <h1>
            <span className="welcome-text">Enter. Engage. Excel.</span>
          </h1>
          <p>Use your LNMIIT email to continue</p>
          <button className="login-button" onClick={handleGoogleLogin}>
            <img src={GoogleIcon} alt="Google Icon" className="icon-img" />
            Login with Google
          </button>
          <span className="newto">
            New to LNMIIT Campus Connect?<br />
            <a href="mailto:admin@lnmiit.ac.in" className="adminLink">
              Contact admin
            </a>{" "}
            to register.
          </span>
        </div>
      </div>


      {/* ✅ Register Popup */}
      {showRegister && <Register onRegisterSuccess={handleRegisterSuccess} />}
    </div>
  );
};


export default Login;
