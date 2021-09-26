import React, { useContext } from 'react'
import {dataContext} from './dataContext'

function Footer() {
    let coreData = useContext(dataContext)

    return (
        <footer className="app-footer d-print-none">
    <div className="container text-center fixed-bottom bg-white">{coreData.Data.success}
    <small className="copyright">Copyright ® 2021 <i className="fas fa-heart"></i> Developed by <a className="app-link" href="http://l2lmarketing.com" target="_blank">SIMSYS Software</a></small>
    
    </div>
    </footer>
    )
}

export default Footer
