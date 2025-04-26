import "./stories.scss"
import Story1 from "../../assets/images/story1.jpg"
import Story2 from "../../assets/images/story2.jpg"
import Story3 from "../../assets/images/story3.jpg"
import Story4 from "../../assets/images/story4.jpg"
import Profile from "../../assets/images/img1.jpg"
const Stories = () => {

     //TEMPORARY
    const stories = [
        {
        id: 1,
        name: "Manik Malhotra",
        img: Story1,
        },
        {
        id: 2,
        name: "Bob Ray",
        img: Story2,
        },
        {
        id: 3,
        name: "Damon Salvatore",
        img: Story3,
        },
        {
        id: 4,
        name: "Rihanna Dina",
        img: Story4,
        },
    ];

    return (
        <div className="stories">
            <div className="story">
                    <img src={Profile} alt="profile_img"/>
                    <span>Rishika Manocha</span>
                    <button>+</button>
            </div>
            {stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={story.img} alt="story_img"/>
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories