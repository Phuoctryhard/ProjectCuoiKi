from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os

app = Flask(**name**)
app.config['UPLOAD_FOLDER'] = 'uploads/'

if not os.path.exists(app.config['UPLOAD_FOLDER']):
os.makedirs(app.config['UPLOAD_FOLDER'])

@app.route('/post/create', methods=['POST'])
def create*post(): # Access text fields
congti = request.form.get('congti')
luong = request.form.get('luong')
vitri = request.form.get('vitri')
khuvuc = request.form.get('khuvuc')
level = request.form.get('level')
timedang = request.form.get('timedang')
language = request.form.get('language')
id* = request.form.get('id')
soluong = request.form.get('soluong')
kinhnghiem = request.form.get('kinhnghiem')
bangcap = request.form.get('bangcap')
mota = request.form.get('mota')
yeucau = request.form.get('yeucau')

    # Access file
    if 'anh' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    anh = request.files['anh']
    if anh.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if anh:
        filename = secure_filename(anh.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        anh.save(file_path)

    # Log the received data
    print('Text Fields:', request.form)
    print('Uploaded File:', file_path)

    # Handle the data as needed, for example, save to database

    return jsonify({'message': 'Data received successfully!'})

if **name** == '**main**':
app.run(host='0.0.0.0', port=5000)



## Xử lí ảnh trong nodejs 
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Specify the directory to store uploaded files

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle form data submission
app.post('/post/create', upload.single('anh'), (req, res) => {
  // Access text fields from req.body
  const {
    congti, luong, vitri, khuvuc, level, timedang,
    language, id, soluong, kinhnghiem, bangcap, mota, yeucau
  } = req.body;

  // Access the uploaded file from req.file
  const anh = req.file;

  // Log the received data
  console.log('Text Fields:', req.body);
  console.log('Uploaded File:', anh);

  // Handle the data as needed, for example, save to database

  res.send('Data received successfully!');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
