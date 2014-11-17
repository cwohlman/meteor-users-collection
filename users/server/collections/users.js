// If you want to modify the rights on user updates
// then add a new allow rule in your app.


// this code allows editing any field except roles and services

Users.allow({
  // this allow rule is modified by the deny rule below to prevent users from
  // setting roles or services.
    update: function (userId, doc, fieldNames, modifier) {
        return (doc._id === userId || Users.isAdmin(userId));
    }
});

// prevents non-admins from setting roles, services or emails.
// all three of these contain security information which the user shouldn't be
// allowed to set.
// this can't be overridden in your app (and you shouldn't).
Users.deny({
  update: function (userId, doc, fieldNames) {
    console.log(_.union(fieldNames, ['roles', 'services', 'emails']));
    return !Users.isAdmin(userId) &&
    _.union(fieldNames, ['roles', 'services', 'emails']).length;
  }
});
