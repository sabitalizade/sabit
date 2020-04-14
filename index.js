const express = require('express'),
ejslayout = require('express-ejs-layouts'),
app = express(),
path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./server/views'));

app.use('/public',express.static(path.join(__dirname,'public')));


app.use(ejslayout);

require('./server/router/routermanager')(app);



app.listen(8000);