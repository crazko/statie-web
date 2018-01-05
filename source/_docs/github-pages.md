---
title: Publish Content To Github Pages with Travis
id: 9
---

The best way to use Statie is to have a [website on Github repository](https://github.com/TomasVotruba/tomasvotruba.cz), use [Github Pages](https://pages.github.com/) and [Travis](https://www.travis-ci.org/) to host and update generated content for you.

How to Setup?

## Add `gh-pages` Branch to the Repository

Github Pages usually shows the content of the special branch named `gh-pages`. Use following commands to create it:

```bash
git checkout -b gh-pages
git push origin gh-pages
```

## Allow Travis to Make Changes

Travis is not allowed to modify your Github repository per se. We need to give it a correct rights explicitly - via tokens.

On Github go to [Settings](https://github.com/settings/profile) → [Developer Settings](https://github.com/settings/developers) → [Personal Access Tokens](https://github.com/settings/tokens) → **Generate New Token** and select **repo** scope. Give it a recognisable name and copy generated token afterwards.

Visit `https://travis-ci.org/<github-profile>/<repository-name>` and **Activate repository**. Select **More options** → **Settings** and under **Environment variables** add new one:

- Name: **GH_TOKEN**
- Value: generated token

You don't have to be afraid of exposing the token to the public - it's securely hidden from the logs unless you purposely set it otherwise.

[![GH_TOKEN is hidden from the log](/data/travis-gh-token-log.png)](https://www.travis-ci.org/crazko/statie-web/builds/323202354#L429)

## Configure Travis

In the root of your project's directory create `.travis.yml` file with the following content:

```yaml
language: php

php: 7.1

branches:
    only:
        - master

install:
    - composer install

script:
    - vendor/bin/statie generate source

deploy:
    provider: pages
    skip_cleanup: true
    github_token: $GH_TOKEN
    local_dir: output
    on:
        branch: master
```

Such configuration will install all dependencies and generate output on every commit you push (also on every pull request) to the repository, but publish it only when changes are made upon the `master` branch (specified in the last row).

You can read more about [building pull requests](https://docs.travis-ci.com/user/pull-requests/) or deploying to [Github Pages](https://docs.travis-ci.com/user/deployment/pages/) in the official documentation.

Notice the usage of the variable `$GH_TOKEN` we just created - this adds Travis rights to make changes. Now the Travis is able to push to your Github repository for you!

---

Push a new change to your project or run a build from the Travis Dashboard and visit `https://<github-profile>.github.io/<repository-name>` to see generated output.
