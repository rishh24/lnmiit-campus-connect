import "./posts.scss"
import ProfPic4 from "../../assets/images/profpic4.jpg"
import ProfPic8 from "../../assets/images/profpic8.jpg"
import Post1 from "../../assets/images/post1.jpg"
import Post2 from "../../assets/images/post2.jpg"
import Post from "../post/Post"

const Posts = () => {

    //TEMPORARY
    const posts = [
        {
        id: 1,
        name: "Shel Rhai",
        userId: 1,
        profilePic:
            ProfPic4,
        desc: "Making memories, one moment at a time.",
        img: Post1,
        },
        {
        id: 2,
        name: "Vil Cay",
        userId: 2,
        profilePic:
            ProfPic8,
        desc: "As the sun sets over Beermalpura, Mukandpura, Rajasthan on this beautiful March 24th, 2025, we're reflecting on the rich history and culture of this amazing place. What are your favorite things about our community? Share your thoughts and memories below!",
        },
    ];

    return (
        <div className="posts">
            {posts.map(post=>(
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Posts