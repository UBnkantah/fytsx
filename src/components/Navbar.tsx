import {FaBars, FaTimes} from "react-icons/fa";
import Logo from "../images/logo.svg";
import { Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <Container>
        <div className="d-flex justify-content-between align-items-center py-3">
        <img src={Logo} alt="image" />
        <nav className="d-flex gap-3">
            <a>Features</a>
            <a>Team</a>
            <a>Sign in</a>
        </nav>
    </div>
    </Container>
    
  )
}

export default Navbar