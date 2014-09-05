Package.describe({
  summary: "Exposes the users collection as Users and provides collection and template helpers for the users collection."
});

Package.on_use(function (api, where) {
  api.use('templating');
  api.add_files('users/both/collections/users.js', ['client', 'server']);
  api.add_files('users/client/helpers.js', 'client');
  api.add_files('users/server/collections/users.js', 'server');
  api.add_files('users/server/publications/admin_user.js', 'server');
  api.add_files('users/server/publications/admin_users.js', 'server');
  api.add_files('users/server/publications/current_user_data.js', 'server');
  api.export('Users');
});
