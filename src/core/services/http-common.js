import axios from "axios";

export default axios.create({
    baseURL: "https://20.55.113.23:8443/psychohelp/api/v1/",
    headers: {"Content-type": "application/json"}
});