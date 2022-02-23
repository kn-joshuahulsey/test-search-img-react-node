const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const axios = require('axios');

const PORT = process.env.PORT || 5000;
const accessToken = "Bp45azOd9H0A3oXfFGQzbvJKObbysRmVld6hbBU_QYM";

const app = express();
app.use(express.json());
app.use(cookieParser());

const corsOpts = {
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

app.post('/api/search', async function (req, res) {

  const result = await axios.get('https://api.unsplash.com/search/photos/?client_id=' + accessToken + '&query=' + req.body.value);

  var payload = [];
  result.data.results.forEach(ele => {
    payload.push({ imageUrl: ele.urls.regular, likes: ele.likes });
  });

  res.status(200).send(payload);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


