import React from "react";
import RouteCompo from "./Routes/RouteCompo";
import { Provider } from 'react-redux'
import store from './redux/store'
import Axios from 'axios'


function App() {
const getlocalip = async () => {
  try {
    const response = await Axios.get('http://35.174.208.29:4000/localip/');
    console.log("Connected to server");
    console.log(response.data);
    localStorage.setItem('baseUrl', `http://${response.data.localIp}:4000`);
  } catch (error) {
    console.error("Error fetching local IP:", error);
    // Handle error gracefully, e.g., show a message to the user
  }
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
