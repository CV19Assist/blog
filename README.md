# CV19 Assist Blog

The text content for our blog is written in Markdown and committed to this repo.  This repo then uses a github Actions to convert to HTML and JSON files which are published to the `gh-pages` branch.  The main single page app then picks up the content from there and shows it within the UI.

For publication process see [entries/README](entries/README.md). For details of the github Action please see the [workflow file](.github/workflows/generate.yml).

To see the blog please visit https://cv19assist.com/blog