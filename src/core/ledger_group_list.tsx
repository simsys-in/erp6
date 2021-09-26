import { Badge, Button, ButtonGroup, ButtonToolbar, Card, Container, Table } from 'react-bootstrap'
import { Link } from "react-router-dom";
import * as Icons from 'react-bootstrap-icons';
import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

interface SomeState {
  action?: String,
  uid?: String,
  f?: any,
  l: []
}


export class Ledger_category extends React.Component<any, SomeState> {
  list = () => {
    axios.get('billing/sales_invoice').then(r => {
      this.setState({ l: r.data.data, action: 'list' })
    })
      .catch(e => {
        console.log('error');

      })
  }

  render() {
    return (
      <Container className="mt-2">
        <Card>
          <Card.Header as="h5" className="d-print-none"><Icons.CartPlusFill /> Sales Invoice <Badge bg="info">list</Badge>
            <div className="float-end">
              <ButtonToolbar aria-label="Toolbar with Button groups">
                <ButtonGroup aria-label="First group" className=" mt-1">
                  <Link to={`/billing/sales_invoice/list`}><Button size="sm" variant="outline-primary" className="mx-2"><Icons.ListUl size="18px" /></Button></Link>
                  <Link to={`/billing/sales_invoice`}><Button size="sm" variant="outline-success"><Icons.Files size="18px" /></Button></Link>
                </ButtonGroup>

              </ButtonToolbar>

            </div>

          </Card.Header>

          
          <Card.Body>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Ledger Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {this.state.l.map((r: any, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{r.ledger_category}</td>
                      <td><Link to={`/billing/sales_invoice/${r.uid}`}><Icons.PencilSquare className="text-warning ms-3" style={{ cursor: "hand" }} /></Link></td>
                    </tr>
                  )
                })
                } */}

              </tbody>
            </Table>

          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default Ledger_category