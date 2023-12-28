import {Row, Col, Container} from "react-bootstrap";
import HeroImg from "../images/illustration-intro.png";

const Herosection = () => {
  return (
    <Container>
       <Row className="d-flex justify-content-center align-items-center">
        <Col md={9} xs={12} className="text-center">
            <img src={HeroImg} alt="" />
            <h5>All your files in one secure location, accessible anywhere.</h5>
            <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            
        </Col>
    </Row> 
    </Container>
    
  )
}

export default Herosection