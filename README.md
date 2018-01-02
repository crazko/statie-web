# [Statie.org](https://www.statie.org) [![Build Status](https://travis-ci.org/crazko/statie-web.svg?branch=master)](https://travis-ci.org/crazko/statie-web)

This is the documentation site for [Statie](https://github.com/Symplify/Statie), the PHP static site generator.

## Contributing

Open an issue or, better, fork this repository, make changes and send a pull request. Thank you!

## See your changes

Build the site locally:

- be sure you have [composer](https://getcomposer.org/) installed
- install Statie
	```shell
	composer require symplify/statie
	```
- generate the site from the source
	```shell
	vendor/bin/statie generate source
	```
- run local PHP server
	```
	php -S localhost:8000 -t output
- open [localhost:8000](http://localhost:8000) in your browser.
