module.exports = function(eleventyConfig) {
  // Copy the entire assets folder to the output
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Also copy admin if you have it
  eleventyConfig.addPassthroughCopy("src/admin");
  
  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data"
    }
  };
};