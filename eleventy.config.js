const pluginWebc = require("@11ty/eleventy-plugin-webc")
const { EleventyI18nPlugin } = require("@11ty/eleventy")

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_includes/components/**/*.webc"
  })
  
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en",
  });
  
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
