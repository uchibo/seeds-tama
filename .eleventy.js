module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addWatchTarget("./src/assets/css/");

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}