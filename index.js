const express = require('express')
const app = express() // instantiating express server
const exphbs = require('express-handlebars')

// all request will have to know that the public folder is where we put out static files
// public is referring to directories in the folder
app.use(express.static('public'))

// setting dynamic view
app.engine('handlebars', exphbs(
  // handlebars configuration
  {
    defaultLayout: 'main', //where the template is
    partialsDir: 'views/partials'
  }
))
app.set('view engine', 'handlebars')

// listening for request
// get route/path
// send only take json objects. sendfile takes html
app.get('/', function(req, res) {
  // this will be your search through db
  var user = {
    name: 'Rebecca',
    email: 'rebeccatay92@gmail.com',
    isAdmin: false
  }
  var blogs = [
    {
      title: 'My blogpost',
      content: 'Here\'s my blogpost'
    },
    {
      title: 'Second blogpost',
      content: 'This is the second post'
    }
  ]
  res.render('index', {
    user: user,
    blogs: blogs
  })
}) //close .get
app.get('/about', function(req, res) {
  res.render('about')
})
app.get('/faq', function(req, res) {
  res.render('faq')
})
app.post('/')
var port = process.env.PORT || 4000

app.listen(port, function() {
  console.log('Express is running on port ' + port)
})
