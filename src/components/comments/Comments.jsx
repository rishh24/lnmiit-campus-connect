import "./comments.scss"
import ProfPic3 from "../../assets/images/profpic3.jpg"
import ProfPic9 from "../../assets/images/profpic9.jpg"
import Profile from "../../assets/images/img1.jpg"

const Comments = () => {
    //Temporary
    const comments = [
        {
        id: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
        name: "Lady Jacob",
        userId: 1,
        profilePicture:
            ProfPic9,
        },
        {
        id: 2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
        name: "Jenny Lincoln",
        userId: 2,
        profilePicture:
            ProfPic3,
        },
  ];
    return (
        <div className="comments">
            <div className="write">
                <img src={Profile} alt="" />
                <input type="text" placeholder="write a comment" />
                <button>Send</button>
            </div>
            {
            comments.map(comment=>(
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))
        }</div>
    )
}

export default Comments