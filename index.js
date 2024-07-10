const express = require('express')
const app = express()

//app.get('/', function (req, res) {

const fs = require('fs');
const path = require('path');

// Define the input and output file paths using process.cwd()
const input_file_path = path.join(process.cwd(), 'input.txt');
const output_file_path = path.join(process.cwd(), 'output.txt');

// Read the input file
fs.readFile(input_file_path, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    return;
  }

  // Modify the content (e.g., convert to uppercase)
  const modified_data = data.toUpperCase();

  // Write the modified content to the output file
  fs.writeFile(output_file_path, modified_data, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing file: ${err.message}`);
      return;
    }
    console.log(`File has been modified and saved to ${output_file_path}`);
  });
});


//})

app.listen(3000)
console.log('App listen in 3000')