import FtLogo from "../images/logo.svg";
import { Col, Container, Row } from 'react-bootstrap'
import {FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhoneAlt, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="">
        <Container>
        <img src={FtLogo} alt="image" />
        <Row>
            <Col md={3}>
                <div>
                    
                    <div className="d-flex gap-3">
                        <FaLocationArrow color="white" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                
            </Col>
            <Col md={2}>
                <div>
                    <div>
                        <FaPhoneAlt />
                        <p>+1-543-123-4567</p>
                    </div>
                    <div>
                        <FaEnvelope />
                        <p>example@fylo.com</p>
                    </div>
                </div>
            </Col>
            <Col md={2}>
                <div>
                    <a href="">About Us</a>
                    <a href="">Jobs</a>
                    <a href="">Press</a>
                    <a href="">Blog</a>
                </div>
            </Col>
            <Col md={2}>
                <div>
                    <a href="">Contact Us</a>
                    <a href="">Terms</a>
                    <a href="">Privacy</a>
                </div>
            </Col>
            <Col md={3}>
                <div>
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </Col>
        </Row>
    </Container>
    </div>
    
  )
}

export default Footer