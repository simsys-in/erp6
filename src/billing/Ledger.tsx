import React from 'react'
import { ButtonGroup, ButtonToolbar, Card, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useHistory} from "react-router-dom";
import { ArrowRight } from 'react-bootstrap-icons';

export default class Ledger extends React.Component {
    state = {
        toDashboard: false,
       }
      test:any
    save=()=>{
        alert('save')
    }
    list(){
        console.log('list')
        //return (<Redirect to="/testt" push />)
        //window.location.href='/dashboard'
        //Chr()
        //this.props.history.push('/');
       
    }
    print(){
        console.log('print');
        
    }
    
    render(){
        
    return (
        
        <Container className="mt-2">
            <Card>
                <Card.Header as="h5"><ArrowRight /> Ledger

                    <ButtonToolbar className="float-end" aria-label="Toolbar with Button groups">
                        <ButtonGroup aria-label="First group">
                        <ArrowRight className="text-primary ms-2" style={{ cursor: "hand" }} size="1em" onClick={this.list} />
                        <ArrowRight className="text-secondary ms-2" style={{ cursor: "hand" }} size="1em" onClick={this.print} />
                        {/* <Button variant="primary" className=""><FaRegSave size="1.5em" /></Button> */}
                        <ArrowRight className="text-success ms-2" style={{ cursor: "hand" }} size="1em" onClick={this.save} />
                        </ButtonGroup>

                    </ButtonToolbar>
                </Card.Header>

                <Card.Body>
                        <Row>
                            <Col md={4}><InputGroup size="sm" className="mb-3"><InputGroup.Text id="inputGroup-sizing-sm">Ledger</InputGroup.Text><FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" /></InputGroup></Col>

                            <Col md={4}><InputGroup size="sm" className="mb-3"><InputGroup.Text id="inputGroup-sizing-sm">Alias</InputGroup.Text><FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" /></InputGroup></Col>

                            <Col md={4}><InputGroup size="sm" className="mb-3"><InputGroup.Text id="inputGroup-sizing-sm">Ledger Group</InputGroup.Text><FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" /></InputGroup></Col>
                        </Row>
                </Card.Body>
                <Card.Footer className="text-muted">Help</Card.Footer>
            </Card>
        </Container>

    )
}
}

