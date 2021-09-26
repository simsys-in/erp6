import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { menuContext, routeContext } from '../dataContext'

function Middleware() {
    let routeData = useContext(routeContext)
    let menuData = useContext(menuContext)
    useEffect(() => {
        if (!localStorage.route){
    axios.get('core/route')
    .then(r=>{
        console.log('ajax route processed');
        localStorage.setItem('route',JSON.stringify(r.data.data))
        routeData.setData(r.data.data)
    })
    .catch(e=>console.log(e.response.data))
    }else{
        console.log(JSON.parse(localStorage.route));
        
        routeData.setRoute([JSON.parse(localStorage.route)])
        console.log(routeData.Route);
        
    }


    if (!localStorage.menu){
    axios.get('core/menu')
    .then(r=>{
        console.log('ajax menu processed');
        menuData.setData(r.data.data)
        localStorage.setItem('menu',JSON.stringify(r.data.data))
    })
    .catch(e=>console.log(e.response.data))
    }else{
        //menuData.setData(JSON.parse(localStorage.menu))
    }

    })

    return (
        <>
        </>
    )
}


<>
</>
export default Middleware