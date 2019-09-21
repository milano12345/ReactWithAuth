import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { tsPropertySignature } from '@babel/types'

const PrivaterRoute = ({component: Component, ...rest}) => {
  
    console.log('hello')
    return ( <Route 
        {...rest}
        render = {() => {
            return  <Component /> 
        }}/>
    )
}

export default PrivaterRoute;