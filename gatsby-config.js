module.exports = {
  siteMetadata: {
    title: `Power Alpha `,
    author: `RMSSoftwareTech`,
    description: `Learn to build Power Apps Model Driven, Canvas Apps, Power Automate, PCF and more..`,
    twitterUsername: "@rmssoftwaretech",
    image:'/poweralpha.jpeg',
    siteUrl: `https://poweralpha.tech/`,
    keywords: [
      "RMSSoftwareTech",
      "Power Platform",
      "Model Driven Apps",
      "PowerApps",
      "Canvas Apps",
      "Power Pages",
      "Power Automate",
      "PCF",
      "Low Code Power Apps",
      "Low-Code No-Code",
      "PowerApps Components Framework"
    ],
    social: {
      twitter: `rmssoftwaretech`,
      github: `rmssoftwaretech`,
      email: `rmssoftwaretech@gmail.com`,
    },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
          host: 'https://poweralpha.tech/',
          sitemap: 'https://poweralpha.tech/sitemap/sitemap-index.xml',
          policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
          name: `PowerApps Alpha`,
          short_name: `PowerAlpha`,
          start_url: `/`,
          background_color: `#ffffff`,
          theme_color: `#4ABCF8`,
          display: `standalone`,
          icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
          trackingId: "UA-237895995-1",
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `www-rmssoftwaretech-com`
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
          endpoint: "https://gmail.us18.list-manage.com/subscribe/post?u=0aa6172fea654b4e22f4b66ce&amp;id=536cf18265&amp;f_id=00f31de7f0",
      },
    },
  ]
}
