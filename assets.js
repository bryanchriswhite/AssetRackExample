var rack = require('asset-rack')
  , assets = new rack.Rack([
    new rack.BrowserifyAsset({
      url     : '/js/widget.bundle.js',
      filename: __dirname + '/widget/app/index.js',
      prepend : new rack.AngularTemplatesAsset({
        url    : '/js/widget/templates.js',
        dirname: __dirname + '/widget/app/views'
      })
    })
  ])
  ;

module.exports = assets;
