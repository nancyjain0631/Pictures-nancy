import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers:{
        Authorization: 'Client-ID X-IwvAH4iDrYZ8dBH1o7TNlvZzNsaPSDPU9qwJ3Ug2Y'
    }
});