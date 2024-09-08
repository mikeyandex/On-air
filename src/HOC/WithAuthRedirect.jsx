import React, { useEffect } from 'react'
import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"

const WithAuthRedirect = (Component) => {

  return function WrappedComponent(props) {
    let isAuth = useSelector(state => state.auth.isAuth)
    
    let navigate = useNavigate()
    
    useEffect(() => {  
      if (!isAuth) {
        return navigate("/Login")
      }
    }, [isAuth])
  
    return <Component {...props} />
  }
}

export default WithAuthRedirect