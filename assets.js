var rack = require('asset-rack')
  , widgetTemplates = new rack.AngularTemplatesAsset({
    url    : '/widget/templates.js',
    dirname: __dirname + '/widget/app/views'
  })
  , dashboardTemplates = new rack.AngularTemplatesAsset({
    url    : '/dashboard/templates.js',
    dirname: __dirname + '/dashboard/app/views',
    templateCacheDirname: '/dashboard/views'
  })
  , sharedTemplates = new rack.AngularTemplatesAsset({
    url    : '/shared/templates.js',
    dirname: __dirname + '/shared/app/views',
    templateCacheDirname: '/shared/views'
  })
  , assets = new rack.Rack([
    new rack.BrowserifyAsset({
      url     : '/widget.bundle.js',
      filename: __dirname + '/widget/app/index.js',
      prepend : [widgetTemplates, sharedTemplates]
    }),
    new rack.BrowserifyAsset({
      url     : '/dashboard.bundle.js',
      filename: __dirname + '/dashboard/app/index.js',
      prepend : [dashboardTemplates, sharedTemplates]
    })
  ])
  ;

module.exports = assets;
