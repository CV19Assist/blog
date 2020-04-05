const path = require("path");
const fs = require("fs");
const showdown = require("showdown");
const converter = new showdown.Converter({ metadata: true });

const dirPath = path.join(__dirname, "entries");
const outputPath = path.join(__dirname, "gh-pages");

let entryIndex = [];
let entries = {};

fs.readdir(dirPath, (err, filenames) => {
  if (err) {
    console.log(err);
    return;
  }

  // console.log(filenames);
  filenames.forEach((filename) => {
    let data = fs.readFileSync(path.join(dirPath, filename), "utf8");

    // Ignore README.md.
    if (filename === "README.md") {
      return;
    }

    if (!filename.match(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z)(--.*)?.md$/)) {
      console.log(`Unexpected filename '${filename}'`);
      return;
    }

    // console.log(filename);
    // console.log(data);

    const html = converter.makeHtml(data);
    let indexEntry = converter.getMetadata();
    let id = path.basename(filename, ".md");
    indexEntry.id = id;
    indexEntry.createdAt = id;
    if (!indexEntry.slug) {
      console.log(`Metadata 'slug' is required, not found in "${filename}". Ignoring this file.`);
      return;
    }
    if (!indexEntry.slug.match(/^\S{2,}$/)) {
      console.log(`Slug must be at least two non-whitespace characters, found '${indexEntry.slug}' in "${filename}". Ignoring this file.`);
      return;
    }

    // Validate that the slug is unique
    if (entries[indexEntry.slug]) {
      console.log(`Already found slug "${indexEntry.slug}", slug must be unique in "${filename}". Ignoring this file.`);
      return;
    }

    if (indexEntry.publish === "false") {
      console.log(`Ignoring "${filename}" because 'publish' was set to false.`);
      return;
    }

    entryIndex.push(indexEntry);

    let bodyEntry = { ...indexEntry };
    bodyEntry.html = html;
    entries[indexEntry.slug] = bodyEntry;

    // console.log(indexEntry);
    // console.log(html);
    // });
  });
  // console.log(entryIndex);
  // console.log(entries);

  // Finally write the output files.
  fs.writeFileSync(path.join(outputPath, "index.json"), JSON.stringify(entryIndex), "utf8");
  Object.keys(entries).forEach(entrySlug => {
    fs.writeFileSync(path.join(outputPath, `entry-${entrySlug}.json`), JSON.stringify(entries[entrySlug]), "utf8");
  });
  console.log(`Generated ${entryIndex.length} entries.`)
});
