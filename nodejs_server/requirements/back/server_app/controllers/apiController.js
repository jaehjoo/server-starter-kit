const axios = require('axios');

exports.hello = (req, res) => {
    res.json({message: 'hello!'});
};

exports.helloAi = async (req, res) => {
    try {
        const response = await axios.get('http://ai:8000/api/hello/ai');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error});
    }
}