import { Badge, Button, ButtonGroup, ButtonToolbar, Card, Col, Container, FormControl, InputGroup, Row, Spinner, Table, } from 'react-bootstrap'
import { Redirect } from "react-router-dom";
import * as Icons from 'react-bootstrap-icons';
import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

interface SomeState {
  action?: String,
  uid?: String,
  f?: any,
  l: [],
  islist:Boolean,
  issave:Boolean,
  isview:Boolean,
  isdelete:Boolean
}



export class Ledger_group extends React.Component<any, SomeState> {
  constructor(props: any) {
    super(props)

    this.state = { l: [], f: { ledger_group: '',uid:'' },islist:false,issave:false,isview:false,isdelete:false }

  }

  componentDidUpdate(prevProps: any, prevState: any) {
    // console.log('prevProp',prevProps);
    // console.log('prevStat',prevState);
    // console.log('curact',this.state.action);
    //console.log('didupdate');
    //console.log(this.state);
    
    
  }

  componentWillUnmount() {
    //console.log('comwillunmount');
  }

  componentDidMount() {
    console.log('didmount');
    if (this.props.match.path == '/core/ledger_group/print/:uid') {
      this.preview(this.props.match.params.uid)
    } else if (this.props.match.path == '/core/ledger_group/:uid') {
      this.view(this.props.match.params.uid)
    } else if (this.props.match.path == '/core/ledger_group/list') {
      this.list()
    } else {
      this.new()
    }
  }

  insert(){
    console.log('insert');
    this.setState({issave:true})
    axios.post('core/ledger_group', this.state.f)
    .then(r => {
      toast.warn("Inserted Successfully", {position: "bottom-center",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,})
      this.setState({issave:false})
      this.new()
    })
    .catch(e => {
      console.log(e);
      this.setState({issave:false})
      toast.error(e.response?JSON.stringify(e.response.data):e.message, {position: "bottom-center",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,})
    })
  }

  update(){    
    this.setState({issave:true})
    axios.put('core/ledger_group/'+this.state.f.uid, this.state.f)
    .then(r => {
      toast.warn("Updated Successfully", {position: "bottom-center",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,})
      this.setState({issave:false})
      this.new()
    })
    .catch(e => {
      this.setState({issave:false})
      toast.error(e.response.data?JSON.stringify(e.response.data):e.message, {position: "bottom-center",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,})
    })
  }

  save = () =>this.state.f.uid?this.update():this.insert()



  list = () => {
    this.setState({ action: 'list',islist:true })
    axios.get('core/ledger_group').then(r => {
      this.setState({ l: r.data.data,islist:false })
    })
      .catch(e => {
        this.setState({islist:false })
        console.log('error');

      })
  }

  view = (uid: String) => {
    this.setState({ action: 'edit',uid:uid,isview:true })
    axios.get('core/ledger_group/' + uid).then(r => {
      this.setState({ f: r.data,isview:false })
      console.log(this.state.f);
    }).catch(e=>{
      this.setState({isview:false })
      toast.error(e.response?JSON.stringify(e.response.data):e.message, {position: "bottom-center",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,})
    })
  }

  preview = (uid: String) => {
    this.setState({ ...this.state, action: 'preview' })
  }
  duplicate=()=>{
    this.setState({f:{uid:''}})
    toast.info('Duplicated', {position: "bottom-center",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,})
  }
  print = () => {
    console.log('print');
    window.print()
  }

  new = () => {
    console.log('new');
    let f:any = this.state.f
    Object.keys(f).map((k,v)=>f[k]='')
    
    this.setState(()=>{
      return {f:f,action:'new'}
    })
    //console.log(this.state)
    
  }

  delete = (uid:String) => {
    this.setState({isdelete:true})
    axios.delete('core/ledger_group/'+uid).then(r=>{
      toast.info('Deleted Successfully', {position: "bottom-center",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,})
      this.setState({isdelete:false})
      this.list()
    }).catch(e=>{
      this.setState({isdelete:false})
      toast.error(e.response.data?JSON.stringify(e.response.data):e.message, {position: "bottom-center",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,})
    })
  }
  setd = (e: any) => {
    this.setState({ ...this.state, f: {...this.state.f, [e.target.id]: e.target.value } })
  }

  render() {
    return (
      <Container className="mt-2">
        <ToastContainer />
        {this.state.action == 'list' ? (<Redirect to="/core/ledger_group/list" push />) :
          this.state.action == 'edit' ? (<Redirect to={`/core/ledger_group/${this.state.uid}`} push />) :
            this.state.action == 'preview' ? (<Redirect to={`/core/ledger_group/print/${this.state.uid}`} push />) :
              this.state.action == 'new' ? (<Redirect to="/core/ledger_group" push />) :
                ''
        }

        <Card>
          <Card.Header as="h5" className="d-print-none"><Icons.CartPlusFill /> Ledger Group <Badge bg="info">{this.state.action}</Badge>
            <div className="float-end">
              <ButtonToolbar aria-label="Toolbar with Button groups">
                <ButtonGroup aria-label="First group" className=" mt-1">
                <Spinner animation="grow" className={this.state.islist || this.state.issave || this.state.isview || this.state.isdelete?'':'d-none'} />
                  <Button size="sm" variant="outline-primary" className={"mx-1 "+ (this.state.action == 'list' || this.state.islist ? 'd-none' : '')} onClick={this.list}><Icons.ListUl size="18px" /></Button>
                  <Button size="sm" variant="outline-secondary" className={"mx-1 "+ (this.state.action == 'new' ? 'd-none' : '')} onClick={this.new}><Icons.FilePlusFill size="18px" /></Button>
                  <Button size="sm" variant="outline-success" className={"mx-1 " + (this.state.action == 'new' || this.state.action == 'edit' ? '' : 'd-none ') + (this.state.issave?'d-none':'')} accessKey="s" title="Save [Alt + S]" onClick={this.save}><Icons.Save2Fill size="16px" /></Button>

                  <div className="dropdown">
                    <Button size="sm" data-bs-toggle="dropdown" variant="outline-dark" className="mx-1"><Icons.ThreeDotsVertical size="18px" /></Button>
                    <ul className="dropdown-menu" aria-labelledby="user-dropdown-toggle">
                      <li><a className={"dropdown-item "+ (this.state.action=='edit'?'':'d-none')} role="button" onClick={this.duplicate} ><Icons.Files/> Duplicate</a></li>
                      <li><a className={"dropdown-item "+ (this.state.action=='edit'?'':'d-none')+(this.state.isdelete?' d-none':'')} role="button" onClick={()=>this.delete(this.state.f.uid)} ><Icons.EraserFill/> Delete</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className={"dropdown-item "+ (this.state.action=='list'?'':'d-none')} href="#" >Download CSV</a></li>
                    </ul>
                  </div>
                </ButtonGroup>

              </ButtonToolbar>

            </div>

          </Card.Header>

          <Card.Body className={this.state.action == 'new' || this.state.action == 'edit' ? '' : "d-none"}>

            <Row>
              <Col md={4}><InputGroup className="mb-1 input-group-sm"><InputGroup.Text>Ledger Group</InputGroup.Text><FormControl className="fw-bold" id="ledger_group" onChange={this.setd} value={this.state.f.ledger_group} autoFocus /></InputGroup></Col>
            </Row>
          </Card.Body>
          <Card.Body className={this.state.action == 'list' ? '' : "d-none"}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Ledger Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.l.map((r: any, i) => {
                  return (
                    <tr key={i}>
                      <td style={{width:"20px"}}>{i + 1}</td>
                      <td>{r.ledger_group}</td>
                      <td style={{width:"20px"}}><Icons.PencilSquare className="text-warning ms-3" style={{ cursor: "hand" }} onClick={() => this.view(r.uid)} /></td>
                    </tr>
                  )
                })
                }

              </tbody>
            </Table>

          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default Ledger_group