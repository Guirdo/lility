const glob = require('fast-glob')
const pluginWebc = require("@11ty/eleventy-plugin-webc")
const { EleventyI18nPlugin } = require("@11ty/eleventy")

module.exports = function (eleventyConfig) {

  /* -------- Filters --------  */
  glob.sync('./config/filters/*.js').forEach((file) => {
    let filters = require('./' + file);
    Object.keys(filters).forEach((name) => {
      eleventyConfig.addFilter(name, filters[name]);
    });
  });

  /* -------- Languages --------  */
  glob.sync('./config/languages/*.js').forEach((file) => {
    let plugin = require('./' + file)
    eleventyConfig.addPlugin(plugin)
  });

  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_includes/components/**/*.webc"
  })
  
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en",
  });

  eleventyConfig.addWatchTarget('./src/assets');
  eleventyConfig.addPassthroughCopy('src/assets/images/')
  eleventyConfig.addPassthroughCopy("src/admin");
  
  return {
    dir: {
      input: "src",
      include: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site"
    }
  }
}
