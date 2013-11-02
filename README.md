AssetRackExample
================

Examples of asset rack configurations to demonstrate PRs made on techpines/asset-rack

##Master
The master branch (is the only one atm) is an example of an express backend, serving an angular front-end.
The express app is `.use`ing [asset-rack](https://github.com/techpines/asset-rack) with [browserify](https://github.com/substack/node-browserify)
to serve a bundled (and optionally minified) version of the angular app *and* it's templates, ready to be dependency
injected into angular's `$templateCache` -- **all in a single javascript file**.
