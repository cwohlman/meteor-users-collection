var Helpers = {};

Helpers.isAdmin = function() {
  return Users.isAdmin(Meteor.userId());
};

Helpers.isUserInRole = function (role, options) {
  return Users.isInRole(Meteor.userId(), role);
};

Helpers.user = function () {
  return Meteor.user();
};

Helpers.userId = function () {
  return Meteor.userId();
};

_.each(Helpers, function (helper, key) {
  UI.registerHelper(key, helper)
});
