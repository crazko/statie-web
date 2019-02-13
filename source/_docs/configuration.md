---
title: Configuration
id: 2
---

Create a `statie.yml` file in your project root.

## Parameters

Parameters are global variables for all your templates.

```yaml
# statie.yml
parameters:
    site_url: http://github.com
    socials:
        facebook: http://facebook.com/github
```

Then you can use it in your Twig templates:
```twig
<a href="{{ site_url }}">Home</a>
Facebook: {{ socials.facebook }}
```

## Importing other configs

It is possible to split long configuration into more smaller files.

```yaml
# statie.yml
imports:
    - { resource: 'data/favorite_links.yml' }

parameters:
    site_url: http://github.com
    socials:
        facebook: http://facebook.com/github
```

```yaml
# data/favorite_links.yml
parameters:
    favorite_links:
        blog:
            name: "Suis Marco"
            url: "http://ocramius.github.io/"
```

## Register Services

```yaml
services:
    App\SomeService: ~

    App\TweetService:
        arguments:
          - '%twitter.api_key%'
```
