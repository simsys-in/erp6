
function Dashboard() {
    return (
        <>
            <div className="app-content pt-3 p-md-3 p-lg-4">

                <h1 className="app-page-title">Dashboard <span className="badge bg-primary role">role</span></h1>
                <div className="row g-4 mb-4 byrole role-admin d-none">
                    <div className="col-6 col-lg-3 ">
                        <div className="app-card app-card-stat shadow-sm h-100 bg-success">
                            <div className="app-card-body p-3 p-lg-4">
                                <i className="fas fa-users fa-3x text-light mb-2"></i>
                                <h4 className="stats-type mb-1 text-light">Total Clients</h4>
                                <div className="stats-figure text-light">1326</div>
                                <div className="stats-meta text-danger">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                    </svg> 20%</div>
                            </div>                           
                        </div>
                    </div>

                    <div className="col-6 col-lg-3">
                        <div className="app-card app-card-stat shadow-sm h-100 bg-secondary">
                            <div className="app-card-body p-3 p-lg-4">
                                <i className="fas hand-holding-usd fa-3x text-light mb-2"></i>
                                <h4 className="stats-type mb-1 text-light">Expenses</h4>
                                <div className="stats-figure text-light">$2,250</div>
                                <div className="stats-meta text-warning">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                                    </svg> 5% </div>
                            </div>
                            <a className="app-card-link-mask" href="#"></a>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="app-card app-card-stat shadow-sm h-100 bg-gradient">
                            <a className="app-card-link-mask" href="#admin/forex_payment">
                                <div className="app-card-body p-3 p-lg-4">
                                    <i className="far fa-money-bill-alt fa-3x mb-2"></i>
                                    <h4 className="stats-type mb-1">Withdraw Request</h4>
                                    <div className="stats-figure forex_payment_pending_count"></div>
                                    <div className="stats-meta text-danger">
                                        Open</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="app-card app-card-stat shadow-sm h-100 bg-primary  bg-gradient">
                            <a className="app-card-link-mask" href="#admin/forex_receipt">
                                <div className="app-card-body p-3 p-lg-4">
                                    <i className="fas fa-wallet fa-3x mb-2 text-light"></i>
                                    <h4 className="stats-type mb-1 text-light">Deposit Request</h4>
                                    <div className="stats-figure text-light forex_receipt_approvel_count"></div>
                                    <div className="stats-meta text-warning">New</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mb-4 byrole role-admin d-none">
                    <div className="col-12 col-lg-6">
                        <div className="app-card app-card-chart h-100 shadow-sm">
                            <div className="app-card-header p-3">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-auto">
                                        <h4 className="app-card-title">Deposits</h4>
                                    </div>
                                    <div className="col-auto">
                                        <div className="card-header-action">
                                            <a href="#"><i className="fas fa-danger-circle"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="app-card-body p-3 p-lg-4">
                                <div className="mb-3 d-flex">
                                    <select className="form-select form-select-sm ms-auto d-inline-flex w-auto" defaultValue={"1"}>
                                        <option value="1" >This week</option>
                                        <option value="2">Today</option>
                                        <option value="3">This Month</option>
                                        <option value="3">This Year</option>
                                    </select>
                                </div>
                                <div className="chart-container">
                                    <canvas id="canvas-linechart" ></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="app-card app-card-chart h-100 shadow-sm">
                            <div className="app-card-header p-3">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-auto">
                                        <h4 className="app-card-title">Withdrawal</h4>
                                    </div>
                                    <div className="col-auto">
                                        <div className="card-header-action">
                                            <a href="#"><i className="fas fa-plus-circle"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="app-card-body p-3 p-lg-4">
                                <div className="mb-3 d-flex">
                                    <select className="form-select form-select-sm ms-auto d-inline-flex w-auto" defaultValue={"1"}>
                                        <option value="1" >This week</option>
                                        <option value="2">Today</option>
                                        <option value="3">This Month</option>
                                        <option value="3">This Year</option>
                                    </select>
                                </div>
                                <div className="chart-container">
                                    <canvas id="canvas-barchart" ></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row g-4 mb-4 byrole role-admin d-none">
                    <div className="col-12 col-lg-6">
                        <div className="app-card app-card-progress-list h-100 shadow-sm">
                            <div className="app-card-header p-3">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-auto">
                                        <h4 className="app-card-title">Progress</h4>
                                    </div>
                                    <div className="col-auto">
                                        <div className="card-header-action">
                                            <a href="#"><i className="fas fa-times-circle"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="app-card-body">
                                <div className="item p-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <div className="title mb-1 ">Client Registration</div>
                                            <div className="progress">
                                                <div className="progress-bar bg-success" role="progressbar" ></div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <a className="item-link-mask" href="#"></a>
                                </div>


                                <div className="item p-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <div className="title mb-1 ">Equity Investment</div>
                                            <div className="progress">
                                                <div className="progress-bar bg-success" role="progressbar" ></div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <a className="item-link-mask" href="#"></a>
                                </div>

                                <div className="item p-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <div className="title mb-1 ">Lots</div>
                                            <div className="progress">
                                                <div className="progress-bar bg-success" ></div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <a className="item-link-mask" href="#"></a>
                                </div>

                                <div className="item p-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <div className="title mb-1 ">Total Payouts</div>
                                            <div className="progress">
                                                <div className="progress-bar bg-success" role="progressbar"></div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <a className="item-link-mask" href="#"></a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="app-card app-card-stats-table h-100 shadow-sm">
                            <div className="app-card-header p-3">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-auto">
                                        <h4 className="app-card-title">Stats List</h4>
                                    </div>
                                    <div className="col-auto">
                                        <div className="card-header-action">
                                            <a href="#">View report</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="app-card-body p-3 p-lg-4">
                                <div className="table-responsive">
                                    <table className="table table-borderless mb-0">
                                        <thead>
                                            <tr>
                                                <th className="meta">Source</th>
                                                <th className="meta stat-cell">Views</th>
                                                <th className="meta stat-cell">Today</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href="#">Job Portal</a></td>
                                                <td className="stat-cell">110</td>
                                                <td className="stat-cell">
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                                    </svg>
                                                    30%
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">Forex</a></td>
                                                <td className="stat-cell">67</td>
                                                <td className="stat-cell">23%</td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">Capital</a></td>
                                                <td className="stat-cell">56</td>
                                                <td className="stat-cell">
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                                                    </svg>
                                                    20%
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">Marketing </a></td>
                                                <td className="stat-cell">24</td>
                                                <td className="stat-cell">-</td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">Payroll </a></td>
                                                <td className="stat-cell">17</td>
                                                <td className="stat-cell">15%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mb-4 byrole role-admin1 d-none">
                    <div className="col-12 col-lg-4">
                        <div className="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
                            <div className="app-card-header p-3 border-bottom-0">
                                <div className="row align-items-center gx-3">
                                    <div className="col-auto">
                                        <div className="app-icon-holder">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-receipt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                                <path fillRule="evenodd" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </div>

                                    </div>
                                    <div className="col-auto">
                                        <h4 className="app-card-title">Lot</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="app-card-body px-4">

                                <div className="intro">Lot Status and Client Daily Trade Status</div>
                            </div>
                            <div className="app-card-footer p-4 mt-auto">
                                <a className="btn app-btn-secondary" href="#">Create New</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
                            <div className="app-card-header p-3 border-bottom-0">
                                <div className="row align-items-center gx-3">
                                    <div className="col-auto">
                                        <div className="app-icon-holder">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-code-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path fillRule="evenodd" d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                                            </svg>
                                        </div>

                                    </div>
                                    <div className="col-auto">
                                        <h4 className="app-card-title">Member</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="app-card-body px-4">

                                <div className="intro">Create a New Forex or Marketing User in this portal</div>
                            </div>
                            <div className="app-card-footer p-4 mt-auto">
                                <a className="btn app-btn-secondary" href="#">Create New</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
                            <div className="app-card-header p-3 border-bottom-0">
                                <div className="row align-items-center gx-3">
                                    <div className="col-auto">
                                        <div className="app-icon-holder">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-tools" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z" />
                                                <path fillRule="evenodd" d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
                                            </svg>
                                        </div>

                                    </div>
                                    <div className="col-auto">
                                        <h4 className="app-card-title">Tools</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="app-card-body px-4">

                                <div className="intro">Setup All our Portal Customized Configuration and Reports</div>
                            </div>
                            <div className="app-card-footer p-4 mt-auto">
                                <a className="btn app-btn-secondary" href="#">Create New</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mb-4 byrole role-employee d-none">
                    <div className="col-6 col-lg-3 ">
                        <div className="app-card app-card-stat shadow-sm h-100 bg-success">
                            <a href="/#forex_user">

                                <div className="app-card-body p-3 p-lg-4">
                                    <i className="fas fa-users fa-3x text-light mb-2"></i>
                                    <h4 className="stats-type mb-1 text-light">Create Live Account</h4>
                                    <div className="stats-figure text-light user_count"></div>
                                    <div className="stats-meta text-danger">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                        </svg> 20%</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3">
                        <div className="app-card app-card-stat shadow-sm h-100 bg-secondary">
                            <div className="app-card-body p-3 p-lg-4">
                                <i className="fas hand-holding-usd fa-3x text-light mb-2"></i>
                                <h4 className="stats-type mb-1 text-light">Total Equity</h4>
                                <div className="stats-figure text-light">$2,250</div>
                                <div className="stats-meta text-warning">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                                    </svg> 5% </div>
                            </div>
                            <a className="app-card-link-mask" href="#"></a>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="app-card app-card-stat shadow-sm h-100 bg-gradient">
                            <a href="https://download.mql5.com/cdn/web/link2link.forex.limited/mt5/link2linkforex5setup.exe">
                                <div className="app-card-body p-3 p-lg-4">
                                    <i className="fas fa-download fa-3x mb-2"></i>
                                    <h4 className="stats-type mb-1">Version 5</h4>
                                    <div className="stats-figure">Meta Trade</div>
                                    <div className="stats-meta text-warning">Download</div>
                                </div>
                            </a>
                        </div>

                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="app-card app-card-stat shadow-sm h-100 bg-primary  bg-gradient">
                            <div className="app-card-body p-3 p-lg-4">
                                <i className="fas fa-wallet fa-3x mb-2 text-light"></i>
                                <h4 className="stats-type mb-1 text-light">Turnover</h4>
                                <div className="stats-figure text-light">22k</div>
                                <div className="stats-meta text-warning">by Month</div>
                            </div>
                            <a className="app-card-link-mask" href="#"></a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard
