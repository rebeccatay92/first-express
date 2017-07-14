const express = require('express')
const app = express() // instantiating express server

// all request will have to know that the public folder is where we put out static files
// public is referring to directories in the folder
app.use(express.static('public'))

// listening for request
// get route/path
// send only take json objects. sendfile takes html
app.get('/', function(req, res) {
  res.send('index.html')
})
app.get('/about/:name', function(req, res) {
  res.send(req.params)
})
app.get('/faq', function(req, res) {
  res.send('faq page')
})
app.post('/')
var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log('Express is running on port 3000')
})
