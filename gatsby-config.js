module.exports = {
  siteMetadata: {
    url: "https://bwf.org.in",
    title: "Better World Foundation",
    description: "Better World Foundation is a Non-profit consulting based out of Patna.",
    image: "/src/images/icon.png",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Better World Foundation",
        short_name: "BWF",
        start_url: "/",
        display: "standalone",
        icon: "src/images/icon.png",
      }
    },
  ],
};
