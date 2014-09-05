var Helpers = {};

Helpers.isAdmin = function() { 
  return Users.isAdmin(Meteor.userId());
};

Helpers.isUserInRole = function (role, options) {
  return Users.isInRole(Meteor.userId(), role);
};

_.each(Helpers, function (helper, key) {
  UI.registerHelper(key, helper)
});
