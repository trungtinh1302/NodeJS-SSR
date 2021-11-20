const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3001;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
// http logger
app.use(morgan('combined'));

app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});