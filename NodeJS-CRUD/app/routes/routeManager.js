var routeLogin = require('./loginRoutes');
var routeHome = require('./homeRoutes');

module.exports = function(app) {
    app.use('/', routeHome);
    app.use('/login', routeLogin);
}
