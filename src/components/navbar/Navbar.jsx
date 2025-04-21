import { NavLink, Link } from "react-router-dom";
import { useState, useContext, useRef, useEffect } from "react";
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DarkModeContext } from "../../context/darkModeContext.jsx";
import Profile from "../../assets/images/img1.jpg";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    "New user joined your group",
    "New message from Aman",
    "Your post got 10 likes!",
  ]);

  const notificationsRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDeleteNotification = (index) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className="icon logo">
          <img src={logo} alt="logo" />
        </Link>

        <NavLink to="/" className="icon">
          <HomeOutlinedIcon />
        </NavLink>

        <div className="icon toggle-theme" onClick={toggle}>
          {darkMode ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </div>

        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search.." />
        </div>
      </div>

      <div className="right">
        <div className="notification-icon" ref={notificationsRef}>
          <div className="icon-wrapper icon" onClick={() => setNotificationsOpen(!notificationsOpen)}>
            <NotificationsOutlinedIcon />
            {notifications.length > 0 && (
              <span className="notification-count">{notifications.length}</span>
            )}
          </div>

          {notificationsOpen && (
            <div className="notifications-dropdown">
              {notifications.length === 0 ? (
                <div className="no-notifications">No notifications.</div>
              ) : (
                <>
                  {notifications.map((notification, index) => (
                    <div className="notification" key={index}>
                      <span>{notification}</span>
                      <CloseIcon
                        className="delete-icon"
                        onClick={() => handleDeleteNotification(index)}
                      />
                    </div>
                  ))}
                  <div className="clear-link" onClick={handleClearAll}>
                    Clear All
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <div className="user">
          <NavLink to="/ownProfile/:id" className="user-link">
            <img src={Profile} alt="profile icon" />
            <span>Rishika Manocha</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
