import axios from "axios";

const apiBase = axios.create({
    timeout: 1000,
});

export { apiBase };
