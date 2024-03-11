import Axios from "axios";


const ip =localStorage.getItem('ipaddress');
const localIp=JSON.parse(ip)
console.log(ip)
const BaseAxiosUrl = Axios.create({
    baseURL: `http://35.174.208.29:4000/`, // Replace with your actual common IP address
    // You can add other common configurations here
});

export default BaseAxiosUrl

