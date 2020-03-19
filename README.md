<p align="center">
    <img src="source/assets/img/logo.svg">
</p>
<h1 align="center">DEPRECATED since 2020-03</h1>

- https://www.tomasvotruba.com/blog/2020/03/09/art-of-letting-go/
- https://www.tomasvotruba.com/blog/2020/03/16/statie-is-dead-long-live-symfony-static-dumper/

---

# [Statie.org](https://www.statie.org) [![Build Status](https://travis-ci.org/crazko/statie-web.svg?branch=master)](https://travis-ci.org/crazko/statie-web)

This is the documentation site for [Statie](https://github.com/Symplify/Statie), the PHP static site generator.

## Contributing

Open an issue or, better, fork this repository, make changes and send a pull request. Thank you!

## See your changes

Build the site locally:

-   be sure you have [composer](https://getcomposer.org/) installed
-   install dependencies (currently only Statie) `composer install`
-   generate the site from the source `vendor/bin/statie generate source`
-   run local PHP server `php -S localhost:8000 -t output`
-   open [localhost:8000](http://localhost:8000) in your browser.

## Enable live reload (recommended)

You can get rid of hitting refresh on every change you made and see your changes instantly with the use of the [Browsersync](https://www.browsersync.io/):

-   be sure you have [nodejs](https://nodejs.org/) with **npm** installed
-   install dependencies `npm install`
-   run `npm start`
-   open [localhost:3000](http://localhost:3000) in your browser

Now the site updates on every change in the source files.

_Note: you don't need to have local PHP server running._
