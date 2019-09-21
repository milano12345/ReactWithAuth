import React,{useState,useEffect} from 'react';
import './App.scss';
import {Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicMainView from './components/public'
import PrivateMainView from './components/private'
import { axiosWithAuth } from './util/axiosWithAuth';

function App() {
  const [loggedIn,setLoggedIn] = useState(false)
  const [error,setError] = useState()

  useEffect(()=>{
    if(!loggedIn){
      axiosWithAuth().post('/login',{username:"Lambda School",password:"i<3Lambd4"})
      .then(res=>
        res.status === 200 
          && localStorage.setItem("token",res.data)
          && setLoggedIn(true)
          && setError()
      )
      .catch(err=>{console.log(err)})
    }
  },[loggedIn])
  
  setTimeout(()=>{
    
    setLoggedIn(!loggedIn)
  },5000)

  // console.log(loggedIn)
  // console.log(localStorage)
  return (
    <div className="App">
      {error && <p>{error}</p>}
      {loggedIn ? <PrivateRoute path="/" component={PrivateMainView}  />
      :<Route path="/" component={PublicMainView} />}
    </div>
  );
}

export default App;
