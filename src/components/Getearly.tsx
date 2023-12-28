import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button, FytCard } from '../ui'
import { FCData } from '../data/data';

interface EmailProvider {
  email: any
}
interface FormProps {
  onSubmit: (data: EmailProvider) => void;
}

const Getearly = () => {
  const [email, setEmail] = useState<EmailProvider >();

  const Emailfunc = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    try {
      alert(`Thank you ,${email}`)
    } catch (error) {
      alert(`An Error Occurred: ${error}`)
    }
  }

  return (
    <Container>
      <div>
        <div className='d-flex flex-wrap gap-5'>
            {FCData.map(item => (
                <FytCard  key={item.id}/>
            ))}
        </div>
        <div>
<Row className="d-flex justify-content-center align-items-center">
            <Col md={6} xs={12} className='p-5 text-center'>
            <h4>Get early access today</h4>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you.</p>
        <div className='d-flex'>
            <input type="text" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)} className='bg-white rounded p-2 text-black' />
            <Button btntext="Get Started For Free" handleClick={Emailfunc}/>
        </div>
            </Col>
            
            
        </Row>
        </div>

        
     </div>  
    </Container>
    
  )
}

export default Getearly;