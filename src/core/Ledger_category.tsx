import { Badge, ButtonGroup, ButtonToolbar, Card, Col, Container, Dropdown, DropdownButton, FormControl, InputGroup, Row, Table } from 'react-bootstrap'
import { Link } from "react-router-dom";
import * as Icons from 'react-bootstrap-icons';
import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

interface SomeState { action?: String, 
  uid?: String,
  f?:any,
  l:[]
}


export class Ledger_category extends React.Component  <any, SomeState> {
  constructor(props: any) {
    super(props)
    
    this.state = {l:[],action:'new',f:{ledger_category:''}}
    
  }

  componentDidUpdate(prevProps:any, prevState:any) {
    console.log('prevProp',prevProps);
    console.log('prevStat',prevState);
    console.log('curact',this.state.action);
    
    if (this.props.match.path === '/core/ledger_category/print/:uid') {
      //v ={uid: props.match.params.uid, action: 'preview' }
    } else if (this.props.match.path === '/core/ledger_category/:uid' && (this.state.action !== 'edit')) {
      this.view(this.props.match.params.uid)
    } else if (this.props.match.path === '/core/ledger_category' && this.state.action !== 'new' ) {
      this.new()
    } else if (this.props.match.path === '/core/ledger_category/list' && this.state.action !== 'list' ) {
      this.list()
    }else{
      // this.setState({...this.state,action:'new'})
    }
    console.log('comdidupdate');

    
  }

  componentWillUnmount() {
    console.log('comwillunmount');
  }

  componentDidMount() {
    console.log('didmount');


    if (this.props.match.path === '/core/ledger_category/print/:uid') {
      //v ={uid: props.match.params.uid, action: 'preview' }
    } else if (this.props.match.path === '/core/ledger_category/:uid') {
      this.view(this.props.match.params.uid)
    } else if (this.props.match.path === '/core/ledger_category/list') {
      this.setState({action:'list'})
      //this.list()
    }else{
      // this.setState({...this.state,action:'new'})
    }
  }

  save = () => {
    
    axios.post('core/ledger_category',this.state.f)
    .then(r=>{
      console.log(r);
      
      toast.warn("Wow so easy!",{
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
        

    })
    .catch(e=>{

    })
    
  }

  list = () => {  
    axios.get('core/ledger_category').then(r=>{
      this.setState({l:r.data.data,action:'list'})
    })
    .catch(e=>{
      console.log('error');
      
    })
  }

  view = (uid: String) => {
    console.log('edit');
    
    axios.get('core/ledger_category/'+uid).then(r=>{
      this.setState({ ...this.state, f:r.data, action: 'edit' })
    })
    
  }

  preview = (uid: String) => {
    this.setState({ ...this.state, action: 'preview' })
  }

  print = () => {
    console.log('print');
    window.print()

  }

  new = () => {
    this.setState({ ...this.state, action: 'new' })
  }

  delete = () => {
    console.log('delete');

  }
  setd=(e:any)=>{
    this.setState({...this.state,f:{[e.currentTarget.id]:e.currentTarget.value}})
  }

  render() {
    return (
      <Container className="mt-2">
        
        {/* {this.state.action === 'list' ? (<Redirect to="/core/ledger_category/list" push />) :
          this.state.action === 'edit' ? (<Redirect to={`/core/ledger_category/${this.state.uid}`} push />) :
            this.state.action === 'preview' ? (<Redirect to={`/core/ledger_category/print/${this.state.uid}`} push />) :
              this.state.action === 'new' ? (<Redirect to="/core/ledger_category" push />) :
                ''
        } */}
        <Card>
          <Card.Header as="h5" className="d-print-none"><Icons.CartPlusFill /> Ledger Category <Badge bg="info">{this.state.action}</Badge>
            <div className="float-end">
              <ButtonToolbar aria-label="Toolbar with Button groups">
                <ButtonGroup aria-label="First group" className=" mt-1">
                <Link to={`/core/ledger_category/list`}><Icons.ListUl className={"text-primary mx-2 " + (this.state.action === 'new' || this.state.action === 'edit' || this.state.action === 'preview' ? '' : 'd-none')} style={{ cursor: "hand" }} size="1em" /></Link>
                  <Icons.Trash className={"text-danger mx-2 " + (this.state.action === 'edit' ? '' : 'd-none')} style={{ cursor: "hand" }} size="1em" onClick={this.delete} />
                  <Icons.Printer className={"text-info mx-2 " + (this.state.action === 'preview' ? '' : 'd-none')} style={{ cursor: "hand" }} size="1em" onClick={() => this.print()} />
                  {/* <Button variant="primary" className=""><FaRegSave size="1.5em" /></Button> */}
                  <Icons.EyeFill className={"text-secondary mx-2 " + (this.state.action === 'edit' ? '' : 'd-none')} style={{ cursor: "hand" }} size="1em" onClick={() => this.preview('test')} />
                  <Link to={`/core/ledger_category`}><Icons.Files className={"text-success mx-2 " + (this.state.action === 'list' || this.state.action === 'preview' ? '' : 'd-none')} style={{ cursor: "hand" }} size="1em" /></Link>
                  <Icons.Save2Fill className={"text-success mx-2 " + (this.state.action === 'new' || this.state.action === 'edit' ? '' : 'd-none')} style={{ cursor: "hand" }} size="1em" onClick={this.save} />
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

          <Card.Body className={this.state.action === 'new' || this.state.action === 'edit' ? '' : "d-none"}>

            <Row>
              <Col md={4}><InputGroup className="mb-1 input-group-sm"><InputGroup.Text>Ledger Category</InputGroup.Text><FormControl className="fw-bold" id="ledger_category" onChange={this.setd} value={this.state.f.ledger_category} /></InputGroup></Col>
            </Row>
          </Card.Body>
          <Card.Body className={this.state.action === 'list' ? '' : "d-none"}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Ledger Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.l.map((r:any,i)=>{
                  return (
                    <tr key={i}>
                    <td>{i+1}</td>
                    <td>{r.ledger_category}</td>
                    <td><Link to={`/core/ledger_category/${r.uid}`}><Icons.PencilSquare className="text-warning ms-3" style={{ cursor: "hand" }} /></Link></td>
                    </tr>
                    )
                })
                }
                
              </tbody>
            </Table>

          </Card.Body>
          <Card.Body className={this.state.action === 'print' || this.state.action === 'preview' ? '' : "d-none"}>
            <Card.Text>Print</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default Ledger_category