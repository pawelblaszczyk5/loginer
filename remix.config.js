/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'static/build',
  publicPath: '/build/',
  serverBuildDirectory: 'server/build',
  devServerPort: 8002,
  ignoredRouteFiles: ['.*'],
};
