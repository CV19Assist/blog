# CV19 Assist Blog

The content for our blog is written in Markdown, manually converted to HTML and then retrieved on the single page app.  This is just the starting point.

To see the blog please visit https://cv19assist.com/blog


### Conventions

The blog files are stored in the `entries` folder.  Each entry should start with the ISO 8601 timestamp followed by two hyphens (`--`) and then a user friendly title.  The title is only there for easily identifying the entries and will be ignored.  The timestamp can be seen at [UTC Time ](https://www.utctime.net).


## Build

The build is done using github Actions and result in `.json` files in the `docs` folder which are then exposed using github pages.