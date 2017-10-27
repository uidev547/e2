var index = require('./routes/index');
var users = require('./routes/users');
app.use('/e2', index);
app.use('/e2users', users);
