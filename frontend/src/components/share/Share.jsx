import "./share.scss";
import Image from "../../assets/images/img.png";
import Map from "../../assets/images/loc.png";
import Friend from "../../assets/images/tag.png";
import Profile from "../../assets/images/img1.jpg";
import { useContext } from "react";
//import { AuthContext } from "../../context/authContext";

const Share = () => {

  //const {currentUser} = useContext(AuthContext)
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={Profile}
            alt=""
          />
          <input type="text" placeholder={`What's on your mind Rishika?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;