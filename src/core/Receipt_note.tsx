import { useState } from 'react'
import { Badge, ButtonGroup, ButtonToolbar, Card, Col, Container, Dropdown, DropdownButton, FormControl, InputGroup, Row, Table } from 'react-bootstrap'
import { Redirect } from "react-router-dom";
import { Save2Fill, ListUl, Printer, PencilSquare, Trash, CartPlusFill,EyeFill } from 'react-bootstrap-icons';


function Receipt_note() {
    let [action, setAction] = useState('new')
    let [uid, setUid] = useState<String>('')

    const save = () => {
        alert('save')
    }

    const list = () => {
        console.log('list')
        //return (<Redirect to="/testt" push />)
        //window.location.href='/dashboard'
        //Chr()
        setAction('list')
        console.log(action);

    }

    const view = (Uid: String) => {
        setUid(Uid)
        setAction('edit')
    }

    const preview = (Uid: String) => {
        setAction('preview')
    }

    const print = () => {
        console.log(print);

    }

    return (
        <Container className="mt-2">
            {action === 'list' ? (<Redirect to="/receipt_note/list" push />) :
                action === 'edit' ? (<Redirect to={`/receipt_note/:${uid}`} push />) :
                    action === 'print' ? (<Redirect to="/receipt_note/print/:sfdweerf" push />) : ''
            }
            <Card>
                <Card.Header as="h5"><CartPlusFill /> Receipt Note <Badge bg="info">{action}</Badge>
                    <div className="float-end">
                        <ButtonToolbar aria-label="Toolbar with Button groups">
                            <ButtonGroup aria-label="First group" className=" mt-1">
                                <ListUl className="text-primary ms-3" style={{ cursor: "hand" }} size="1em" onClick={list} />
                                <Trash className="text-danger ms-3" style={{ cursor: "hand" }} size="1em" onClick={list} />
                                <PencilSquare className="text-warning ms-3" style={{ cursor: "hand" }} size="1em" onClick={() => view("asdfadf")} />
                                <Printer className="text-info ms-3" style={{ cursor: "hand" }} size="1em" onClick={() => print()} />
                                {/* <Button variant="primary" className=""><FaRegSave size="1.5em" /></Button> */}
                                <Save2Fill className="text-success ms-3" style={{ cursor: "hand" }} size="1em" onClick={save} />
                                <EyeFill className="text-secondary ms-3 me-3" style={{ cursor: "hand" }} size="1em" onClick={() => preview('test')} />
                            </ButtonGroup>

                            {[DropdownButton].map((DropdownType, idx) => (
                                <DropdownType
                                    as={ButtonGroup}
                                    key={idx}
                                    id={`dropdown-button-drop-${idx}`}
                                    drop="start"
                                    size="sm"
                                    variant="secondary"
                                    title=""
                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownType>
                            ))}
                        </ButtonToolbar>

                    </div>

                </Card.Header>

                <Card.Body className={action === 'new' || action === 'edit' ? '' : "d-none"}>

                    <Row>
                        <Col md={4}><InputGroup size="sm" className="mb-3"><InputGroup.Text id="inputGroup-sizing-sm">Ledger</InputGroup.Text><FormControl aria-label="Small" className="fw-bold" id="ledger" aria-describedby="inputGroup-sizing-sm" /></InputGroup></Col>

                        <Col md={4}><InputGroup size="sm" className="mb-3"><InputGroup.Text id="inputGroup-sizing-sm">Alias</InputGroup.Text><FormControl aria-label="Small" className="fw-bold" id="alias" aria-describedby="inputGroup-sizing-sm" /></InputGroup></Col>

                        <Col md={4}><InputGroup size="sm" className="mb-3"><InputGroup.Text id="inputGroup-sizing-sm">Ledger Group</InputGroup.Text><FormControl aria-label="Small" className="fw-bold" id="ledger_group" aria-describedby="inputGroup-sizing-sm" /></InputGroup></Col>
                    </Row>
                </Card.Body>
                <Card.Body className={action === 'list' ? '' : "d-none"}>
                <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>

                    <Row>
                    </Row>
                </Card.Body>
                <Card.Body className={action === 'print' ? '' : "d-none"}>
                    Print

                    <Row>
                    </Row>
                </Card.Body>
            </Card>
        </Container>

    )
}


export default Receipt_note

