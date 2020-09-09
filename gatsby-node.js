const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'saas-ui/lib': path.resolve(__dirname, '../components/'),
        'saas-ui/esm': path.resolve(__dirname, '../components/'),
        'saas-ui': path.resolve(__dirname, '../components/'),
      },
    },
  });
};