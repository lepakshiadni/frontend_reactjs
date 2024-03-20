import React from "react";
import RouteCompo from "./Routes/RouteCompo";
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {
  const getlocalip=async()=>{
    localStorage.setItem('baseUrl',`http://localhost:8080`)
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
