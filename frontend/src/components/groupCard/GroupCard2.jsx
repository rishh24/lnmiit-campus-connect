import "./groupCard.scss";
import GroupImage from "../../assets/images/group/groupimg.jpg";


const GroupCard = ({ group }) => {
  return (
    <div className="group-card">
      <img src={group.img} alt={group.name} />
      <div className="group-info">
        <h3>{group.name}</h3>
        <p>{group.members} members</p>
      </div>
    </div>
  );
};


export default GroupCard;


