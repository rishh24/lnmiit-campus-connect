import { useState } from "react";
import "./register.scss";


const Register = ({ onClose, onRegisterSuccess }) => {
  const [userType, setUserType] = useState("student");
  const [acceptedTerms, setAcceptedTerms] = useState(false); // ✅ Terms checkbox state


  const handleSubmit = (e) => {
    e.preventDefault();


    if (!acceptedTerms) {
      alert("You must accept the Terms and Conditions to proceed.");
      return;
    }


    // ✅ Tell parent registration is done
    if (onRegisterSuccess) {
      onRegisterSuccess();
    }
  };


  return (
    <div className="register-modal">
      <div className="register-content">
        <h2>Complete Your Profile</h2>


        <form onSubmit={handleSubmit}>
          <label>Name <span>*</span></label>
          <input type="text" placeholder="Enter your name" required />


          <label>Batch <span>*</span></label>
          <input type="text" placeholder="Enter your batch" required />


          <label>User Type <span>*</span></label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="student">Student</option>
            <option value="alumni">Alumni</option>
            <option value="faculty">LNMIIT Faculty</option>
            <option value="other">Other</option>
          </select>


          {userType === "alumni" && (
            <>
              <label>Job <span>*</span></label>
              <input type="text" placeholder="Your current job" required />


              <label>Location <span>*</span></label>
              <div className="location-row">
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="State" required />
                <input type="text" placeholder="Country" required />
              </div>
            </>
          )}


          {(userType === "other" || userType === "faculty") && (
            <>
              <label>Department <span>*</span></label>
              <input type="text" placeholder="Enter department" required />


              <label>Designation <span>*</span></label>
              <input type="text" placeholder="Your designation" required />
            </>
          )}


          <label>LinkedIn</label>
          <input type="url" placeholder="https://linkedin.com/in/yourname" />


          <label>GitHub</label>
          <input type="url" placeholder="https://github.com/yourname" />


          <label>Bio <span>*</span></label>
          <textarea placeholder="Write a short bio..." required></textarea>


          <label>About</label>
          <textarea placeholder="Tell us more about you (optional)"></textarea>


          {/* ✅ Terms & Conditions */}
          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
            />
            <label htmlFor="terms" className="terms-label">
              I accept the <a href="#">Terms and Conditions</a> <span>*</span>
            </label>
          </div>


          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};








export default Register;




