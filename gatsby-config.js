// import dotenv from 'dotenv';
 
// dotenv.config({ path: '.env'});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "JengaX",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
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
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "k9t0jgsg",
        dataset: "production",
        watchMode: true,
        // token: process.env.SANITY_TOKEN
      },
    },
  ],
};
