AssetRackExample
================

Examples of asset rack configurations to demonstrate PRs made on techpines/asset-rack
_NOTE: The `node_modules` direcroty **is** under version control so no `npm install` should be necessary;
however; if you do `npm install` npm-shrinkwrap should get the right dependency versions._

##The Rundown
This example consist of an express backend, serving multiple angular front-ends.
The express app is `.use`ing [asset-rack](https://github.com/techpines/asset-rack) along with [browserify](https://github.com/substack/node-browserify)

Each angular app has its own top level directory. 
Any code that's shared between the angular apps is in the shared top level directory.

####AssetRack configuration
I'm using the [`prepend` option](https://github.com/techpines/asset-rack/pull/109) of the `BrowserifyAsset` to 
serve a bundled (and optionally minified) version of the angular app *and* it's templates, ready to be dependency
injected into angular's `$templateCache` -- **all in a single javascript file**.

In addition, the angular tempalte files can be [either `.jade` or `.html`](https://github.com/techpines/asset-rack/pull/107)!

In the dashboard's `angularTemplatesAsset` rack  configuration (assets.js:9) I'm using the optional [`templateCacheDirname` option](https://github.com/techpines/asset-rack/pull/107) 
to tell angular the path it should use to get the templates (files recursively located in `dirname`) from the template cache.


####Angular route configuration
Even though the widget's `view1.jade` is a jade file, `AngularTemplatesAsset` sees it in the `dirname` and it will compile it.
You can see in the widget's route config (widget/index.js:6) we still refer to this file using the `.html` file extension because
angular sees the file after it's been compiled and shouldn't care whether it's jade or html.
