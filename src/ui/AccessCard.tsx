import AccImg from "../images/icon-access-anywhere.svg";
import "./index.css"

interface AccTypes {
    title: String,
    text: String
}

const AccessCard = ({title, text}: AccTypes) => {
  return (
    <div className="accard-container">
        <img src={AccImg} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default AccessCard