/**
 * PurgeCSS by default doesn't consider class names with ":"
 * @see https://www.purgecss.com/extractors#default-extractor
 * @see https://tailwindcss.com/docs/controlling-file-size#removing-unused-css-with-purgecss
 */

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = TailwindExtractor;
