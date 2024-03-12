import React from "react";
import RouteCompo from "./Routes/RouteCompo";
import { Provider } from 'react-redux'
import store from './redux/store'
import Axios from 'axios'


function App() {
  const getlocalip=async()=>{
    await Axios.get('http://35.174.208.29/localip/')
    .then((resp)=>{
      // console.log("Connected to server")
      console.log(resp.data)
      localStorage.setItem('baseUrl',`http://${35.174.208.29}:4000`)
    })
    .catch((error)=>{
      console.log(error)
      // alert("Server is not running, Please start the server."
    })
  }
  React.useEffect(()=>{
    getlocalip()
  },[])

  return (
    <div>
      
      <Provider store={store}>
        <RouteCompo />
      </Provider>

    </div>
  );
}

export default App;
