module.exports = function(app, callback) {
    const User = app.models.User;
//    var User = app.models.User;
    User.create([
        {username: 'admin2', email: 'admin2@admin2.com', password: '1234'}
    ], function(err, users) {
        if (err) return  err;
        console.log('Created users:', users);
      });};
