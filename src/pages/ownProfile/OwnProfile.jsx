import "./ownProfile.scss";
import { useState } from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Posts from "../../components/posts/Posts";
import Profileimg from "../../assets/images/img1.jpg";
import Cover from "../../assets/images/post1.jpg";

const OwnProfile = () => {
    const [editing, setEditing] = useState(false);
    const [bio, setBio] = useState("Software Developer | Tech Enthusiast");
    const [website, setWebsite] = useState("rishika.dev");
    const [location, setLocation] = useState("India");

    const handleEdit = () => {
        setEditing(!editing);
    };

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
                        <span>Rishika Manocha</span>
                        <div className="batch">Batch: 2022</div>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                {editing ? (
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                ) : (
                                    <span>{location}</span>
                                )}
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                {editing ? (
                                    <input
                                        type="text"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                ) : (
                                    <span>{website}</span>
                                )}
                            </div>
                        </div>
                        {editing ? (
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                            />
                        ) : (
                            <div className="bio">{bio}</div>
                        )}
                        <button onClick={handleEdit}>
                            {editing ? "Save Profile" : "Edit Profile"}
                        </button>
                    </div>
                    <div className="right">
                        <a href="https://mail.google.com/mail/">
                            <EmailOutlinedIcon />
                        </a>
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
                    {editing ? (
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    ) : (
                        <p>{bio}</p>
                    )}
                </div>
                <Posts />
            </div>
        </div>
    );
};

export default OwnProfile;
