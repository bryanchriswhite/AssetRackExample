AssetRackExample
================

Examples of asset rack configurations to demonstrate PRs made on techpines/asset-rack
_NOTE: The `node_modules` direcroty **is** under version control so no `npm install` should be necessary;
however; if you do `npm install` npm-shrinkwrap should get the right dependency versions._

##Examples
All of the examples consist of an express backend, serving an angular front-end.
The express app is `.use`ing [asset-rack](https://github.com/techpines/asset-rack) with [browserify](https://github.com/substack/node-browserify)

##AngularTemplatesJade (*you are here)
The angular-templates-jade branch is an example 

##[Master]()
In this example we're using the `prepend` option of the `BrowserifyAsset` to serve a bundled 
(and optionally minified) version of the angular app *and* it's templates, ready to be dependency
injected into angular's `$templateCache` -- **all in a single javascript file**.

In addition, the angular tempalte files can be either `.jade` or `.html`!

In the asset rack  configuration (assets.js:5) we're using the `templateCacheDirname` option to 
tell angular the path it should use to get the templates (files recursively located in `dirname`)
from the template cache.
