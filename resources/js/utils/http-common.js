import axios from "axios";

const getToken = () => {
    const token = localStorage.getItem('token');
    if(!token){
        return false;
    }
    return token;
}


export default axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        'Authorization': 'Bearer ' + getToken(),
        "Content-type": "application/x-www-form-urlencoded",
        'Accept': 'application/json'
    }
});
