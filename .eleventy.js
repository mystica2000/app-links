module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy(".well-known");
  return {
    dir: {
      output: "_site",
    }
  };
};