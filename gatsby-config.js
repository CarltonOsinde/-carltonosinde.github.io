module.exports = {
  siteMetadata: {
    description: "Personal page of Carlton Osinde",
    locale: "en",
    title: "Carlton Osinde",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "classic",
      },
    },
  ],
}
