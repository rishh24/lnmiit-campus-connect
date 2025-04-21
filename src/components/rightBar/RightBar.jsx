import "./rightBar.scss"
import ProfPic1 from "../../assets/images/profpic1.jpeg"
import ProfPic2 from "../../assets/images/profpic2.jpg"
import ProfPic3 from "../../assets/images/profpic3.jpg"
import ProfPic4 from "../../assets/images/profpic4.jpg"
import ProfPic5 from "../../assets/images/damon.jpg"
import ProfPic6 from "../../assets/images/manik.jpeg"
import ProfPic7 from "../../assets/images/profpic7.jpg"
import ProfPic8 from "../../assets/images/profpic8.jpg"
import ProfPic9 from "../../assets/images/profpic9.jpg"
import ProfPic10 from "../../assets/images/profpic10.jpg"

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                           <img src={ProfPic1} alt="profilepic1"/>
                           <span>Elena Gilbert</span>    
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                           <img src={ProfPic2} alt="profilepic2"/>
                           <span>Jim Berg</span>    
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                           <img src={ProfPic3} alt="profilepic3"/>
                           <p>
                            <span>Jenny Lincoln </span>
                            changed their cover picture
                           </p>    
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                           <img src={ProfPic4} alt="profilepic4"/>
                           <p>
                            <span>Shel Rhai </span>
                            sent a message
                           </p>    
                        </div>
                        <span> 1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                           <img src={ProfPic5} alt="profilepic5"/>
                           <p>
                            <span>Damon Salvatore </span>sent a message
                           </p>    
                        </div>
                        <span> 2 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                           <img src={ProfPic6} alt="profilepic6"/>
                           <p>
                            <span>Manik Malhotra </span>
                            changed their profile picture
                           </p>    
                        </div>
                        <span> 5 min ago</span>
                    </div>

                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                           <img src={ProfPic7} alt="profilepic7"/>
                            <div className="online" />
                            <span>Bob Ray </span>  
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                           <img src={ProfPic8} alt="profilepic8"/>
                            <div className="online" />
                            <span>Vil Cay</span>  
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                           <img src={ProfPic9} alt="profilepic9"/>
                            <div className="online" />
                            <span>Lady Jacob </span>  
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                           <img src={ProfPic10} alt="profilepic10"/>
                            <div className="online" />
                            <span>Rihanna Dina </span>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar