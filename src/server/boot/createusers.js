var debug = require('debug');
module.exports = function(app) {
  const User = app.models.User;
  const Role = app.models.Role;
  User.create([
    {username: 'John', email: 'john@doe.com', password: 'opensesame'},
    {username: 'Jane', email: 'jane@doe.com', password: 'opensesame'},
    {username: 'Bob', email: 'bob@projects.com', password: 'opensesame'},
    {username: 'admin', email: 'a@a.com', password: '1234'}
], function(err, users) {
    if (err) return debug('%j', err);
    //...
    // Create projects, assign project owners and project team members
    //...
    // Create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) return debug(err);
      debug(role);

      // Make Bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[2].id
      }, function(err, principal) {
        if (err) return debug(err);
        debug(principal);
      });
    });
  });
};
