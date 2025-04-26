// Profile.jsx
import "./profile.scss";
import { useState, useRef, useEffect } from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import Profileimg from "../../assets/images/profpic4.jpg";
import Cover from "../../assets/images/post2.jpg";

const Profile = () => {
  const [following, setFollowing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [muted, setMuted] = useState(false);
  const menuRef = useRef(null);

  const toggleFollow = () => {
    setFollowing(!following);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="profile">
      <div className="images">
        <img src={Cover} alt="Cover" className="cover" />
        <img src={Profileimg} alt="Profile" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com/accounts/login/?hl=en">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://in.linkedin.com/">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Shel Rhai</span>
            <div className="batch">Batch: 2022</div>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>shel.dev</span>
              </div>
            </div>
            <div className="bio">Software Developer | Tech Enthusiast</div>
            <div className="actionButtons">
              <button onClick={toggleFollow}>{following ? "Following" : "Follow"}</button>
              <button>Message</button>
            </div>
          </div>
          <div className="right">
            <a href="https://mail.google.com/mail/">
              <EmailOutlinedIcon />
            </a>
            <div className="menuContainer" ref={menuRef}>
              <MoreVertIcon
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ cursor: "pointer" }}
              />
              {menuOpen && (
                <div className="dropdownMenu">
                  <span onClick={toggleFollow}>{following ? "Unfollow" : "Follow"}</span>
                  <span onClick={() => setBlocked(!blocked)}>{blocked ? "Unblock" : "Block"}</span>
                  <span onClick={() => setMuted(!muted)}>{muted ? "Unmute" : "Mute"}</span>
                </div>
              )}
            </div>
          </div>
          <div className="stats">
            <span><strong>100</strong> <br />Posts</span>
            <span><strong>500</strong> <br />Followers</span>
            <span><strong>200</strong> <br />Following</span>
            <span><strong>10</strong> <br />Dedications</span>
          </div>
        </div>
        <div className="about">
          <h3>About</h3>
          <p>
            Hello! I'm Shel Rhai, aspiring web developer with a strong foundation in HTML, CSS, JavaScript, and React.js.
            I am passionate about building user-friendly web applications and eager to apply my skills in a dynamic environment.
            Seeking an entry-level role in web development to contribute innovative solutions.
          </p>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;