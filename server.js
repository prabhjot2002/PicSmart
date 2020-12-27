  
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();
const fs = require('fs');
const stream = require('stream');

app.use(fileUpload());
app.use(cors());
// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const img = req.files.img;
  const desc = req.body.desc;
  img.mv(`${__dirname}/client/public/uploads/${img.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ filePath: `/uploads/${img.name}`,imgDesc:desc });
    
    
    
  
  });
});

app.listen(5000, () => console.log('Server Started...'));