# Create a blog entry

Each entry should start with the ISO 8601 timestamp followed by two hyphens (`--`) and then a user friendly title. The title is only there for easily identifying the entries and will be ignored.

| Description | Example |
|-------------|---------|
| With a friendly title | `2020-04-05T02:19:00.000Z--starting-the-blog.md`|
| Without a title | `2020-04-05T02:19:00.000Z.md` |
| With a friendly title | `2020-04-05T02:19:00.000Z--progress-update.md` |

The timestamp example can be seen at [UTC Time](https://www.utctime.net).

## Template

Each entry file should follow this template.

```
---
slug: Valid URL for the entry. This must be unique. Any duplicates are ignored.
author: Author name here.
title: Title of the entry.
summary: A quick summary of the post which will be shown on the main listing page.
publish: false
---
Content of the blog goes here.
```

The `publish` metadata can be used to prevent an entry from being published.

## Publishing an Entry

Entries will be automatically published when the changes are committed to the repository.

Note that you should not have to edit the `gh-pages` branch directly.