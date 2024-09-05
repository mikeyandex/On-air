import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom"

 
const WithAuthRedirect = (Component) => {

  return function WrappedComponent(props) {
    
    let navigate = useNavigate()

    useEffect(() => {
  
      if (!props.isAuth) {
        return navigate("/Login")
      }
    }, [props.isAuth])
  
    return <Component {...props} />
  }
}

export default WithAuthRedirect