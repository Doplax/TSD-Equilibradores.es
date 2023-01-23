import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import "./Main.css"

export default function Main() {
    return(
        <Container>
            <Row className="justify-content-md-center">
                <div className='wrapper'>
                    <Button className='button' href="#">Link</Button> 
                    <Button type="submit">Button</Button>{' '}
                    <Button variant="outline-primary">Primary</Button>{' '}     
                </div>
            </Row>
            
        </Container>
    )
}
