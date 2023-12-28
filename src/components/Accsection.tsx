import { Col, Row } from "react-bootstrap"
import { AccessData } from "../data/data"
import { AccessCard } from "../ui"


const Accsection = () => {
  return (
    <div className="container">
      <Row className="justify-content-center align-items-center">
        <Col md={9} xs={12}>
          <div className="d-flex flex-wrap gap-5 justify-content-between align-items-center text-center">
           {AccessData.map(item => (
          <AccessCard key={item.id} title={item.title} text={item.text} />  
        ))} 
          </div>
          
        </Col>
      </Row>
        
        
    </div>
  )
}

export default Accsection