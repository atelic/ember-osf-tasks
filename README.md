[![Build Status](https://travis-ci.org/atelic/ember-osf-tasks.svg?branch=develop)](https://travis-ci.org/abought/demo-ember-osf)
[![Coverage Status](https://coveralls.io/repos/github/atelic/ember-osf-tasks/badge.svg?branch=develop)](https://coveralls.io/github/abought/demo-ember-osf?branch=develop)
[![Known Vulnerabilities](https://snyk.io/test/github/abought/demo-ember-osf/badge.svg)](https://snyk.io/test/github/abought/demo-ember-osf)
[![Greenkeeper badge](https://badges.greenkeeper.io/abought/demo-ember-osf.svg)](https://greenkeeper.io/)

# Ember OSF Tasks and Group Management

This project in built on top of the Open Science Framework and serves to
1. Make running specific tasks easier
2. Organize users and projects into groups.


This application is based on Ember 2.8 LTS, yarn, nvm, Sass, and YUIDoc.  It applies linters for JS and template style, 
and incorporates badges and config for health reporting services such as Travis and Coveralls.io.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [NVM](https://github.com/creationix/nvm) or [Node.js](http://nodejs.org/)
* [Yarn](https://yarnpkg.com/en/docs/install) (NPM replacement)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/abought/demo-ember-osf.git -o upstream` this repository
* `cd demo-ember-osf`
* `yarn install --pure-lockfile`
* `bower install`
* `ember generate ember-osf` - will generate `config/local.yml`; fill in the
 [required fields](https://github.com/CenterForOpenScience/ember-osf#configuration)

 
## Additional configuration
If you would like to log errors to Sentry, add `SENTRY_DSN` to the correct section of your `local.yml` file, and 
specify the appropriate configuration string for your server/ project. We encourage remote error logging for all COS 
projects.
 
## Running / Development

### Without Docker
* `BACKEND=stage ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### With Docker
* `docker build -t demo-ember-osf . && docker run -p 4200:4200 demo-ember-osf BACKEND=stage ./node_modules/ember-cli/bin/ember serve`

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

Unit tests can be run as follows:
* `ember test`
* `ember test --server`

To run all tests required for CI, use:
* `yarn test`

Testing with docker:
* `docker build -t demo-ember-osf . && docker run demo-ember-osf`

### Building

* `ember build` (development)
* `ember build --environment production` (production)
