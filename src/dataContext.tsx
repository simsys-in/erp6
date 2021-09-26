import React,{ useState} from 'react'

export let dataContext = React.createContext<any>(null)

const DataProvider:React.FC<any> = ({children})=>{
    const [Data,setData] = useState({});
    return( <dataContext.Provider value={{Data,setData}}>
        {children}
    </dataContext.Provider>
    )
}

export let routeContext = React.createContext<any>(null)
export const RouteProvider:React.FC<any> = ({children})=>{
    const [Route,setRoute] = useState({});
    return( <routeContext.Provider value={{Route,setRoute}}>
        {children}
    </routeContext.Provider>
    )
}

export let menuContext = React.createContext<any>(null)
export const MenuProvider:React.FC<any> = ({children})=>{
    const [Data,setData] = useState([]);
    return( <menuContext.Provider value={{Data,setData}}>
        {children}
    </menuContext.Provider>
    )
}

export default DataProvider