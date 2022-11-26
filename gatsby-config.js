require("dotenv").config()
const defaultOptions = require("gatsby-theme-wild-child/defaultOptions")
const options = require("./wc-config")

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-wild-child`,
      options: {
        ...defaultOptions,
        ...options,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        wildChildRoot: "gatsby-theme-wild-child",
        wildChildSrc: "gatsby-theme-wild-child/src",
        wildChildUtils: "gatsby-theme-wild-child/src/utils",
        wildChildComponents: "gatsby-theme-wild-child/src/components",
        wildChildTemplates: "gatsby-theme-wild-child/src/templates",
        wildChildSections: "gatsby-theme-wild-child/src/sections",
        wildChildHooks: "gatsby-theme-wild-child/src/hooks",
        wildChildGsap: "gatsby-theme-wild-child/src/gsap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: "./src/gatsby-theme-wild-child/assets/images/",
      },
      __key: "images",
    },
    // Plugins specific to this website go here
    `gatsby-plugin-gatsby-cloud`,
  ],
}
