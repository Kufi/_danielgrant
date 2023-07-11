module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets")
    eleventyConfig.addPassthroughCopy("documents")
    eleventyConfig.addPassthroughCopy("projects")
}