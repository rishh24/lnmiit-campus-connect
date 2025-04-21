import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import "./leftBar.scss";
import Profile from "../../assets/images/img1.jpg";
import Friends from "../../assets/images/friends.png";
import Groups from "../../assets/images/groups.png";
import Marketplace from "../../assets/images/marketplace.png";
import Events from "../../assets/images/events.png";
import Chat from "../../assets/images/chat.png";
import HallOfFame from "../../assets/images/hallOfFame.png";
import Map from "../../assets/images/map.png";
import Settings from "../../assets/images/settings.png";
import Logout from "../../assets/images/logout.png";
import Hat from "../../assets/images/hat.png";
import Team from "../../assets/images/united.png";

const LeftBar = () => {
    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <NavLink to="/ownProfile/:id" className="item">
                        <img className="profile" src={Profile} alt="profile icon" />
                        <span>Rishika Manocha</span>
                    </NavLink>
                    <NavLink to="/friends" className="item">
                        <img src={Friends} alt="friends icon" />
                        <span>Friends</span>
                    </NavLink>
                    <NavLink to="/groups" className="item">
                        <img src={Groups} alt="groups icon" />
                        <span>Groups</span>
                    </NavLink>
                    <NavLink to="/events" className="item">
                        <img src={Events} alt="events icon" />
                        <span>Events</span>
                    </NavLink>
                    <NavLink to="/chats" className="item">
                        <img src={Chat} alt="chat icon" />
                        <span>Chats</span>
                    </NavLink>
                    <NavLink to="/hatDedication" className="item">
                        <img src={Hat} alt="hat dedication icon" />
                        <span>Hat Dedication</span>
                    </NavLink>
                    <NavLink to="/hallOfFame" className="item">
                        <img src={HallOfFame} alt="hall of fame icon" />
                        <span>Hall Of Fame</span>
                    </NavLink>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <NavLink to="/alumniMap" className="item">
                        <img src={Map} alt="map icon" />
                        <span>Alumni Map</span>
                    </NavLink>
                    <NavLink to="/marketplace" className="item">
                        <img src={Marketplace} alt="marketplace icon" />
                        <span>Marketplace</span>
                    </NavLink>
                    <NavLink to="/aboutTeam" className="item">
                        <img src={Team} alt="team icon" />
                        <span>Our Team</span>
                    </NavLink>
                    <NavLink to="/settings" className="item">
                        <img src={Settings} alt="settings icon" />
                        <span>Settings</span>
                    </NavLink>
                    <NavLink to="/login" className="item">
                        <img src={Logout} alt="logout icon" />
                        <span>Logout</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default LeftBar;
