module.exports = {
  siteMetadata: {
    title: `Regpol-info`,
    siteUrl: `https://regpol.info`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "l_XQu6xqZDe2qPgy-XlG0UUSd3BE3wWMxf0l7XbCoYQ",
        spaceId: "jmh6hxgbu7jv",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-svgr-svgo",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://regpol.info/',
        sitemap: 'https://regpol.info/sitemap/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`],
        display: "swap",
      },
    },
  ],
};
