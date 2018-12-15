// Конфиг, что мы переписываем
// https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/config/webpack.config.dev.js
require('babel-polyfill');

const extendedDefinePlugin = require('extended-define-webpack-plugin');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLodash = require('react-app-rewire-lodash');
const path = require('path');

module.exports = (config, env) => {
  config.entry.unshift('babel-polyfill');
  if (env === 'development') {
    const BitBarWebpackProgressPlugin = require('bitbar-webpack-progress-plugin');
    config.plugins.push(new BitBarWebpackProgressPlugin());

    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        defaultSizes: 'parsed',
        openAnalyzer: false,
        reportFilename: 'BundleAnalyzerFile.html',
      })
    );
  } else {
    config.plugins.push(
      new extendedDefinePlugin({
        'process.env.CURRENT_BRANCH': process.env.DRONE_CURRENT_BRANCH
      })
    );
  }

  config = injectBabelPlugin(['babel-plugin-styled-components', { displayName: true }], config);
  config = rewireLodash(config, env);

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'src', 'store'),
  ];

  config.module.rules[1].oneOf[3].exclude.push(/\.pdf$/);

  config.module.rules[1].oneOf.push({
    include: [/\.pdf$/],
    loader: path.resolve(__dirname, 'node_modules', 'file-loader', 'dist', 'index.js'),
    options: {
      name: 'static/media/[name].[ext]',
    },
  });

  return config;
};
