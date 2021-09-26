import { useState } from 'react'
import { Badge, ButtonGroup, ButtonToolbar, Card, Col, Container, Dropdown, DropdownButton, FormControl, InputGroup, Row, Table } from 'react-bootstrap'
import { Redirect } from "react-router-dom";
import  * as Icons  from 'react-bootstrap-icons';


function Sales_invoice() {
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
        window.print()

    }

    const simsNew =()=>{
        setAction('new')
    }

    return (
        <Container className="mt-2">
            {action === 'list' ? (<Redirect to="/jewellery/sales_invoice/list" push />) :
                action === 'edit' ? (<Redirect to={`/jewellery/sales_invoice/:${uid}`} push />) :
                    action === 'print' ? (<Redirect to="/jewellery/sales_invoice/print/:sfdweerf" push />) :
                    action === 'new' ? (<Redirect to="/jewellery/sales_invoice" push />) : ''
            }
            <Card>
                <Card.Header as="h5" className="d-print-none"><Icons.CartPlusFill /> Sales Invoice <Badge bg="info">{action}</Badge>
                    <div className="float-end">
                        <ButtonToolbar aria-label="Toolbar with Button groups">
                            <ButtonGroup aria-label="First group" className=" mt-1">
                                <Icons.ListUl className="text-primary ms-3" style={{ cursor: "hand" }} size="1em" onClick={list} />
                                <Icons.Trash className="text-danger ms-3" style={{ cursor: "hand" }} size="1em" onClick={list} />
                                <Icons.PencilSquare className="text-warning ms-3" style={{ cursor: "hand" }} size="1em" onClick={() => view("asdfadf")} />
                                <Icons.Printer className="text-info ms-3" style={{ cursor: "hand" }} size="1em" onClick={() => print()} />
                                {/* <Button variant="primary" className=""><FaRegSave size="1.5em" /></Button> */}
                                <Icons.Save2Fill className="text-success ms-3" style={{ cursor: "hand" }} size="1em" onClick={save} />
                                <Icons.EyeFill className="text-secondary ms-3" style={{ cursor: "hand" }} size="1em" onClick={() => preview('test')} />
                                <Icons.Files className="text-success ms-3 me-3" style={{ cursor: "hand" }} size="1em" onClick={() => simsNew()} />
                            </ButtonGroup>

                                <DropdownButton
                                    as={ButtonGroup}
                                    key={1}
                                    id={`dropdown-button-drop-${1}`}
                                    drop="start"
                                    size="sm"
                                    variant="secondary"
                                    title=""
                                >
                                    <Dropdown.Item eventKey="1">Duplicate</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Delete</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Search</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Preview</Dropdown.Item>
                                </DropdownButton>

                        </ButtonToolbar>

                    </div>

                </Card.Header>

                <Card.Body className={action === 'new' || action === 'edit' ? '' : "d-none"}>
                
                    <Row>
                        <Col md={4}><InputGroup size="sm" className="mb-3"><InputGroup.Text id="inputGroup-sizing-sm">Ledger</InputGroup.Text><FormControl aria-label="Small" className="fw-bold" id="ledger" aria-describedby="inputGroup-sizing-sm" /></InputGroup></Col>

                        <Col md={4}><InputGroup size="sm" className="mb-3"><InputGroup.Text id="inputGroup-sizing-sm">Alias</InputGroup.Text><FormControl aria-label="Small" className="fw-bold" id="alias" aria-describedby="inputGroup-sizing-sm" /></InputGroup></Col>

                        <Col md={4}><InputGroup size="sm" className="mb-3"><InputGroup.Text id="inputGroup-sizing-sm">Ledger Group</InputGroup.Text><FormControl aria-label="Small" className="fw-bold" id="ledger_group" aria-describedby="inputGroup-sizing-sm" /></InputGroup></Col>
                    </Row>
                    <Row>
                    <Col md={12}>
                    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th className="text-start">Asset</th>
      <th className="text-end">Weight</th>
      <th className="text-end">Wastage</th>
      <th className="text-center">MC %</th>
      <th className="text-end">Rate/gram</th>
      <th className="text-end">Amount</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>1</td>
      <td className="text-start">Gold Chain</td>
      <td className="text-end">38.000</td>
      <td className="text-end">7.600</td>
      <td className="text-center">17%</td>
      <td className="text-end">₹4450.00</td>
      <td className="text-end">₹56890.00</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
      <td className="text-center"></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
      <td className="text-center"></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
      <td className="text-center"></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
      <td className="text-center"></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
    </tr>
  </tbody>
  <tfoot>
  <tr>
      <th></th>
      <th className="text-end">Grand Total</th>
      <th className="text-end"></th>
      <th className="text-end"></th>
      <th className="text-center"></th>
      <th className="text-end"></th>
      <th className="text-end h5 text-danger">₹56890.00</th>
    </tr>

  </tfoot>
</Table>
                   </Col>
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

                </Card.Body>
                <Card.Body className={action === 'print' || action ==='preview' ? '' : "d-none"}>
                <Row>
                <Col md={6}><h5>SRI MURUGAN JEWELLERY</h5>
                464, Perichi palayam,<br/>
                Dharapuram Road,<br/>
                <b>Tirupur - 641 604</b>
                </Col>
                <Col md={6} className="text-end">
                GST Number : 33BIPA2088Q1ZH<br/>
                Mobile: 94437 92629<br/>
                Email: sales@srimuruganjewellers.com<br/>
                Web: srimuruganjewellers.com<br/>
                  </Col>
                  </Row>
                <Col md={12} className="border-top border-bottom text-center h5">RETAIL INVOICE</Col>
                <Row>
                <Col sm={6}><h5>Mrs.Maheswari</h5>
                464, Perichi palayam,<br/>
                Dharapuram Road,<br/>
                <b>Tirupur - 641 604</b><br/>
                Mobile:995443773
                </Col>
                <Col sm={6} className="text-start">
                Invoice No: <b>102</b><br/>
                Date : 23-09-2021<br/>
                GSTN # : 33BIPA2088Q1ZH<br/>
                  </Col>
                </Row>

                <Row>
                <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th className="text-start">Asset</th>
      <th className="text-end">Weight</th>
      <th className="text-end">Wastage</th>
      <th className="text-center">MC %</th>
      <th className="text-end">Rate/gram</th>
      <th className="text-end">Amount</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>1</td>
      <td className="text-start">Gold Chain</td>
      <td className="text-end">38.000</td>
      <td className="text-end">7.600</td>
      <td className="text-center">17%</td>
      <td className="text-end">₹4450.00</td>
      <td className="text-end">₹56890.00</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
      <td className="text-center"></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
      <td className="text-center"></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
      <td className="text-center"></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
      <td className="text-center"></td>
      <td className="text-end"></td>
      <td className="text-end"></td>
    </tr>
  </tbody>
  <tfoot>
  <tr>
      <th></th>
      <th className="text-end">Grand Total</th>
      <th className="text-end"></th>
      <th className="text-end"></th>
      <th className="text-center"></th>
      <th className="text-end"></th>
      <th className="text-end h5 text-danger">₹56890.00</th>
    </tr>

  </tfoot>
</Table>
               </Row>
                </Card.Body>
            </Card>
        </Container>

    )
}


export default Sales_invoice