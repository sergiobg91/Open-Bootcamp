import axios from 'axios';

const URL_BASE = "http://pokeapi.co/api/v2/"

axios.get(`${URL_BASE}/pokemon/ditto`)
    .then(response => {
        //handle success
        console.log(response.data);
    })
    .catch(error => {
        //handle error
        console.log(error);
    });
