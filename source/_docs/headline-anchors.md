---
title: Headline Anchors
id: 4
---

Do you want to **share link to 3rd paragraph** of the post? Statie adds a link to all headings of [Genereated Elements](/docs/generators/) (e.g. posts; _not_ to standalone pages like index or contact). You can apply some styling to show an anchor.

![Headline Anchors](/data/github-like-headline-anchors.png)

## Add style to your css

Feel free to modify this sample to accommodate your needs:

```css
h2 a:hover::before,
h3 a:hover::before,
h4 a:hover::before {
    display: inline-block;
    content: "#";
    padding-right: .5ch;
    margin-left: -1.5ch;
    border: 0 !important;
}
```

When your hover any heading, an anchor will appear to the left of the heading. Just click & copy the url & share it!

## Removing headline links

In some cases this behaviour may not be appropriate - you can disable it easily with following configuration in `statie.yml` file:

```yaml
parameters:
    generators:
        posts:
            # Disable anchors for all posts
            has_headline_anchors: false
```
