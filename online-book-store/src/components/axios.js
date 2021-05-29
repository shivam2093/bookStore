import axios from "axios"


// easy to use axios we can use fetch too
const instance = axios.create({


    baseURL: 'http://localhost:5001/onlinebookstore-745b4/us-central1/api' // API URL


});


export default instance;