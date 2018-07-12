---
title: Generators
id: 7
---

Posts? Lectures? Places?

All those items with **multiple records and own page** can be configured in `statie.yml`.

This is how default configuration for _posts_ looks like:

```yaml
parameters:
    generators:
        # key name, nice to have for more informative error reports
        posts:
            # required parameters

            # name of variable inside single such item
            variable: post

            # name of variable that contains all items
            variable_global: posts

            # directory, where to look for them
            path: '_posts'

            # which layout to use
            layout: '_layouts/post.latte'

            # and url prefix, e.g. file to path "_posts/2017-31-12-some-post.md" => "blog/2017/31/12/some-post"
            route_prefix: 'blog/:year/:month/:day'

            # optional parameters

            # an object that will wrap it's logic, you can add helper methods into it and use it in templates
            # Symplify\Statie\Generator\Renderable\File\GeneratorFile is used by default
            object: 'Symplify\Statie\Renderable\File\PostFile'

            # it sorts files newer to older, it makes posts work on blog site by default 
            object_sorter: 'Symplify\Statie\Generator\FileNameObjectSorter'
```

## How to Add New Generator?

Create directory in `/source`

```bash
/source/_lectures
```

Create own layout in `/source/_layouts`

```bash
/source/_layouts/lecture.latte
```

Add configuration to `statie.yml`

```yaml
# statie.yml
parameters:
    generators:
        lectures:
            variable: 'lecture'
            variable_global: 'lectures'
            path: '_lectures'
            layout: 'lecture'
            route_prefix: 'learn'
```

### Custom Object - `object`

If you need own object with super method, create it:

```php
namespace MyWebsite\Statie;

use DateTime;
use Symplify\Statie\Renderable\File\AbstractFile;

final class LectureFile extends AbstractFile
{
    /**
     * Will it happen in the future => true
     * or already in past => false
     */
    public function isActive(): bool
    {
        // date is key that should be in every lecture file, e.g. "source/_lectures/doctrine-orm.md"
        if (! isset($this->configuration['date'])) {
            return false:
        }

        return $this->configuration['date'] >= new DateTime;
    }
}
```

And configure it in `statie.yml`

```yaml
# statie.yml
parameters:
    generators:
        lectures:
            ...
            object: 'MyWebsite\Statie\LectureFile'
```

### Custom Object Sorting - `object_sorter`

If you need different object sorting rather then 9 → A, create it:

```php
namespace MyWebsite\Statie;

use Symplify\Statie\Generator\Contract\ObjectSorterInterface;

final class DateObjectSorter implements ObjectSorterInterface
{
    /**
     * @param AbstractFile[] $files
     * @return AbstractFile[]
     */
    public function sort(array $files): array
    {
        usort($files, function (AbstractFile $firstFile, AbstractFile $secondFile): int {
            return $firstFile->getConfiguration()['date'] <=> $secondFile->getConfiguration()['date']; 
        });

        return $files;
    }
}
```

And configure it in `statie.yml`

```yaml
# statie.yml
parameters:
    generators:
        lectures:
            ...
            object_sorter: 'MyWebsite\Statie\DateObjectSorter'
```
