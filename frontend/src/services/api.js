import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://api.url'
})

// Usar Object.freeze() y hook