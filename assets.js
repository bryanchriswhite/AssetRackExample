var rack = require('asset-rack')
  , angularTemplates = new rack.AngularTemplatesAsset({
    url    : '/js/widget/templates.js',
    dirname: __dirname + '/widget/app/views',
    templateCacheDirname: '/widget/views'
  })
  , assets = new rack.Rack([
    new rack.BrowserifyAsset({
      url     : '/js/widget.bundle.js',
      filename: __dirname + '/widget/app/index.js',
      prepend : angularTemplates
    })
  ])
  ;

module.exports = assets;
