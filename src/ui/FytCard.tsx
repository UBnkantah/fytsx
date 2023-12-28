import "./index.css";
import Proimg from "../images/profile-1.jpg";

const FytCard = () => {
  return (
    <div className='rounded fytcard-container'>
        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div className='d-flex gap-2'>
            <img src={Proimg} alt="" style={{borderRadius: "50%", width: "35px", height: "35px"}}/>
            <div>
                <h6>Bruce McKenzie</h6>
                <p>Founder & CEO, Huddle</p>
            </div>
        </div>
    </div>
  )
}

export default FytCard