module.exports = function(eleventyConfig) {
  // Copy the public folder and assets to output
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("src/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/**/*.png");
  eleventyConfig.addPassthroughCopy("src/**/*.webp");
  eleventyConfig.addPassthroughCopy("src/**/*.jpeg");
  
  // Add watch targets for CMS content
  eleventyConfig.addWatchTarget("./src/portfolio/");
  eleventyConfig.addWatchTarget("./src/projects/");
  eleventyConfig.addWatchTarget("./src/testimonials/");
  eleventyConfig.addWatchTarget("./src/hero/");

  // Configure collections
  eleventyConfig.addCollection("portfolio", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/portfolio/*.md");
  });

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md");
  });

  eleventyConfig.addCollection("testimonials", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/testimonials/*.md");
  });

  eleventyConfig.addCollection("heroSlides", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/hero/*.md");
  });

  return {
    dir: {
      input: "src",      // Where your source files are
      includes: "_includes",  // Your includes/templates
      output: "public"   // Where the built site goes
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
