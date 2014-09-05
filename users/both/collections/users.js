Users = Meteor.users;

Users.roles = {
	admin: 'admin'
};

Users.isInRole = function (userId, role) {
  var user = Users.findOne({_id: userId});
  return !!(user && user.roles && user.roles.indexOf(role) != -1);
};

Users.isAdmin = function (userId) {
  return Users.isInRole(userId, Users.roles.admin);
};

Users.isAdminOrInRole = function (userId, role) {
  return Users.isInRole(userId, Users.roles.admin) || Users.isInRole(userId, role);
};
