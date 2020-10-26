import axios from 'axios';

const KEY = 'AIzaSyCBR8cEM__i6kCzVAjKY-6Tn24SsD9d7W8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});