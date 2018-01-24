Package.describe({
  name: 'emdagon:astronomy-author-behavior',
  version: '0.0.1',
  summary: 'Author/createdBy behavior for Meteor Astronomy',
  git: 'https://github.com/emdagon/meteor-astronomy-author-behavior.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');

  api.use([
    'ecmascript',
    'es5-shim',
    'jagi:astronomy@2.5.2'
  ], ['client', 'server']);

  api.mainModule('lib/main.js', ['client', 'server']);
});
