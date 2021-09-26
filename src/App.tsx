import './App.css';

import Footer from './Footer'
import Topbar from './Topbar'
import Dashboard from './Dashboard'
import Ledger from './billing/Ledger'
import Login from './core/Login'

import Receipt_note from './core/Receipt_note'

import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'
import axios from 'axios';
import DataProvider, { MenuProvider, RouteProvider } from './dataContext';
import Ledger_category from './core/Ledger_category';
import Ledger_group from './core/ledger_group';
import Sales_invoice from './jewellery/Sales_invoice'
import Sales_invoice_form from './billing/sales_invoice_form'
import Sales_invoice_list from './billing/sales_invoice_list'

axios.defaults.baseURL = 'https://xiaomi:3000/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token
axios.defaults.timeout = 6000

function App() {


  return (
    <>
      <DataProvider>
        <MenuProvider>
          <RouteProvider>
            

            <Router>
              {localStorage.token ?
                <div className="app">
                  <Topbar></Topbar>
                  
                  <div className="app-wrapper">

                    <Switch>
                      <Route path="/" component={Dashboard} exact={true} />
                      <Route path="/dashboard" component={Dashboard} exact={true} />
                      <Route path="/billing/ledger" component={Ledger} exact={true} />
                      <Route path="/core/login" component={Login} exact={true} />
                      <Route path="/receipt_note" component={Receipt_note} exact={true} />
                      <Route path="/billing/sales_invoice" component={Sales_invoice_form} exact={true} />
                      <Route path="/billing/sales_invoice/list" component={Sales_invoice_list} exact={true} />
                      <Route path="/jewellery/sales_invoice" component={Sales_invoice} exact={true} />
                      <Route path="/jewellery/sales_invoice/list" component={Sales_invoice} exact={true} />
                      <Route path="/jewellery/sales_invoice/:uid" component={Sales_invoice} exact={true} />
                      <Route path="/jewellery/sales_invoice/print/:uid" component={Sales_invoice} exact={true} />
                      <Route path="/receipt_note/list" component={Receipt_note} exact={true}  />
                      <Route path="/receipt_note/:uid" component={Receipt_note} exact={true} />
                      <Route path="/core/ledger_category" component={Ledger_category} exact={true} />
                      <Route path="/core/ledger_category/list" component={Ledger_category} exact={true} />
                      <Route path="/core/ledger_category/:uid" component={Ledger_category} exact={true} />
                      <Route path="/core/ledger_category/print/:uid" component={Ledger_category} exact={true} />

                      <Route path="/core/ledger_group" component={Ledger_group} exact={true} />
                      <Route path="/core/ledger_group/list" component={Ledger_group} exact={true} />
                      <Route path="/core/ledger_group/:uid" component={Ledger_group} exact={true} />

                    </Switch>
                    <Footer></Footer>
                  </div>

                </div>
                : <Login></Login>}




            </Router>
          </RouteProvider>
        </MenuProvider>

      </DataProvider>
    </>
  );
}

export default App;
