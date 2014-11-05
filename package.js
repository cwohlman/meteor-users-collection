Package.describe({
  summary: "Exposes the users collection as Users and provides collection and template helpers."
  , name: 'cwohlman:users-collection'
  , version: "1.0.0"
  , git: 'https://github.com/cwohlman/meteor-users-collection.git'
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@1.0");

  api.use('templating');
  api.use('accounts-base');
  api.use('underscore');

  api.add_files('users/both/collections/users.js', ['client', 'server']);
  api.add_files('users/client/helpers.js', 'client');
  api.add_files('users/server/collections/users.js', 'server');
  api.add_files('users/server/publications/admin_user.js', 'server');
  api.add_files('users/server/publications/admin_users.js', 'server');
  api.add_files('users/server/publications/current_user_data.js', 'server');
  api.export('Users');
});
