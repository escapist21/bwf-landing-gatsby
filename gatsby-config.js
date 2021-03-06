module.exports = {
  siteMetadata: {
    siteUrl: "https://bwf.org.in",
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
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://bwf.us5.list-manage.com/subscribe/post?u=2f05921baf4de816ef94ffd55&amp;id=02eec8b072"
      }
    },
  ],
};
