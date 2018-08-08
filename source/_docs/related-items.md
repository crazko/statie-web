---
title: Related Items
id: 6
---

_Note: this applied only to Generated Elements._

Do you write a post series? Help a reader and **show related posts bellow** using `relatedItems` filter.

## How to Setup?

### Add Post ids to `related_items` section in the Post

```yaml
# _posts/2017-12-31-happy-new-year.md
---
id: 1
title: My first post
related_items: [2]
```

```yaml
---
id: 2
title: My second post
related_items: [1]
---
```

### Add Section to Post Template

In **Latte**:

```twig
# _layout/post.latte
{var $relatedPosts = ($post|relatedItems)}

<div n:if="count($relatedPosts)">
    <strong>Continue Reading</strong>
    <ul>
        {foreach $relatedPosts as $relatedPost}
            <li>
                <a href="/{$relatedPost['relativeUrl']}">{$relatedPost['title']}</a>
            </li>
        {/foreach}
    </ul>
</div>
```

Or in **Twig**:
 
```twig
# _layout/post.twig
{% set relatedPosts = post|relatedItems %}

{% if relatedPosts|length %}
    <div>
        <strong>Continue Reading</strong>
        <ul>
            {% for relatedPost in relatedPosts %}
                <li>
                    <a href="/{{ relatedPost.relativeUrl }}">{{ relatedPost.title }}</a>
                </li>
            {% endfor %}
        </ul>
    </div>
{% endif %}
```
