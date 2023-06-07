import axios from "axios";

export default axios.create({
    baseURL: "http://20.55.113.23:8081/psychohelp/api/v1/",
    headers: {"Content-type": "application/json"}
});