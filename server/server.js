const server = require('express')();
const axios = require('axios');
const cors = require('cors');
const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&key=AIzaSyCWUXQATnE5Md5Aa61TrjIO1Ck9A-hGPgQ'

server.use(cors());

server.get('/', (req, res) => {
    console.log('works');
    axios.get(url).then(response => {
        res.status(200).json({data: response.data.results});
    }).catch(er => console.log(er));
})

server.listen(3001, () => console.log('server running on 3001'))