// server.mjs
import { createServer } from 'node:http';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'node:url';
//import http from http;

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const port = 8080;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




// Define route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views\\index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/*
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//app.use(express.static(path.join(__dirname,
app.get('/',function(request,response){
    response.render('index.html');
    //response.sendFile('C:\/Users\/Matth\/Documents\/Coding\/Valentines/index.html');
});

app.listen(port, () => {
    console.log('Listening on localhost:' + port)
});

/*
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});
*/

// starts a simple http server locally on port 3000
/*server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
*/

// run with `node server.mjs`