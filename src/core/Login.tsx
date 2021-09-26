import axios from 'axios'
import { useState, useContext } from 'react'
import { dataContext } from '../dataContext'
import { ArrowRight } from 'react-bootstrap-icons'
import { Alert } from 'react-bootstrap'

function Login() {
    //eslint-disable-next-line
     let [f,setf] =useState<any>({})
    let data = useContext(dataContext)
    let Dchanged = (e:any) => {
        f[e.currentTarget.name] = e.currentTarget.value
    }
    let login = () => {
        axios.post('core/users/login',f)
        .then((res:any)=>{
            let r = res.data
            data.setData({ ...data.Data, 
                success: 'Logged in',
                 error:'',
                company_info:r.company_info,
                 token:r.token,
                user_group_menu:r.user_group_menu,
                user_group_route:r.user_group_route,
                user_info:r.user_info
             })
             console.log(r.token)
            localStorage.setItem('token',r.token)
            localStorage.setItem('company_info',JSON.stringify(r.company_info))
            localStorage.setItem('user_group_menu',JSON.stringify(r.user_group_menu))
            localStorage.setItem('user_group_route',JSON.stringify(r.user_group_route))
            localStorage.setItem('user_info',JSON.stringify(r.user_info))
            window.location.reload()
            
        })
        .catch((e:any)=>{
            data.setData({ ...data.Data, error: e.response.data||e.status })
        })
    }
    // const notify = () => toast.warn("Wow so easy!",{
    //     position: "bottom-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     });
    return (
        <div className="app app-login p-0">

<div>
        {/* <button onClick={notify}>Notify!</button> */}
      </div>

            <div className="row g-0 app-auth-wrapper">
                <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
                    <div className="d-flex flex-column align-content-end">
                        <div className="app-auth-body mx-auto">
                            <div className="app-auth-branding mb-4"><a className="app-logo" href="index.html"><img className=" me-2" width={180} src="/asset/image/logo.png" alt="logo" /></a></div>
                            <h2 className="auth-heading text-center mb-5">Login to Portal</h2> 
                            <div className="auth-form-container text-start">
                                <form className="auth-form" id="form" encType="multipart/form-data" method="POST">
                                    <input type="hidden" name="cpin" value="149" />
                                    <input type="hidden" name="recaptcha_token" />

                                    <div className="email mb-3">
                                        <label className="sr-only" htmlFor="signin-email">Username </label>
                                        <input id="signin-email" name="username" type="text" className="form-control signin-email" placeholder="Username" required onChange={Dchanged} />
                                    </div>
                                    <div className="password mb-3">
                                        <label className="sr-only" htmlFor="signin-password">Password</label>
                                        <input id="signin-password" name="password" type="password" className="form-control signin-password" placeholder="Password" required onChange={Dchanged} />
                                    </div>

                                    <div className="email mb-3">
                                        <label className="sr-only" htmlFor="signin-email">CPIN </label>
                                        <input name="cpin" type="number" className="form-control signin-email" placeholder="CPIN" required onChange={Dchanged} />
                                    </div>                                    

                                    <div className="password mb-3 ">
                                        <div className="extra mt-3 row justify-content-between">
                                            <div className="col-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="RememberPassword" />
                                                    <label className="form-check-label" htmlFor="RememberPassword">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="forgot-password text-end">
                                                <ArrowRight  /><a href="#">Forgot password?</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="email mb-3 text-center">
                                    <Alert key={0} variant="success" className={data.Data.success?'':'d-none'}>{data.Data.success}</Alert>
                                    <Alert key={0} variant="danger" className={data.Data.error?'':'d-none'}>{data.Data.error}</Alert>
                                    </div>

                                    <div className="text-center">
                                        <div className="spinner-grow spinner-login d-none" role="status"><span className="visually-hidden">Loading...</span></div>
                                        <button type="button" className="btn btn-primary btn-lg w-100 btn-login text-white" onClick={login}> Login  <i className="fas fa-sign-in-alt fa-1x"></i></button>


                                    </div>
                                </form>

                                <div className="auth-option text-center pt-5">No Account? Sign up <a className="text-link" href="#" >here</a>.</div>
                            </div>

                        </div>

                        <footer className="app-auth-footer">
                            <div className="container text-center py-3">
                                <small className="copyright">Copyright ® 2021 <i className="fas fa-heart" ></i> Developed by <a className="app-link" href="http://simsys.in" target="_blank">SIMSYS Software</a> Team</small>

                            </div>
                        </footer>
                    </div>
                </div>
                <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                    <div className="auth-background-holder">
                    </div>
                    <div className="auth-background-mask"></div>
                    <div className="auth-background-overlay p-3 p-lg-5">
                        <div className="d-flex flex-column align-content-end h-100">
                            <div className="h-100"></div>
                            <div className="overlay-content p-3 p-lg-4 rounded">
                                <h5 className="mb-3 overlay-title"> ERP Automation</h5>
                                <div>More info click <a href="http://simsys.in/">here</a>.</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )

}

export default Login