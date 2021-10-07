module.exports = {
  siteMetadata: {
    title: `Underhand — Speakeasy бар захований в серці Троєщини`,
    description: `Ми цінуємо людину і спілкування — хочемо, аби у тебе була можливість знайти для себе місце, де можеш не соромитись, бути свіжим, спілкуватись без перешкод, зустрічати цікавих людей, дізнаватись щось нове про когось і головне — про себе. Наші коктейлі смачні — всім зрозуміло і це легко перевірити. Але мало хто знає про коктейлі стільки як наші майстри — в цьому наша унікальність — ти п'єш коктейль і дізнаєшся його історію. Прийти в Underhand — дізнатись щось нове про себе через призму цікавого поєднання смаків твого персонального коктейля — бармен розуміє вас і знає, що тобі потрібно саме зараз`,
    author: `@pronso-horeca`,
    siteUrl: `https://underhand.com.ua/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Underhand Speakeasy Bar`,
        short_name: `Underhand`,
        start_url: `/`,
        background_color: `#262626`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#262626`,
        display: `minimal-ui`,
        icon: `src/images/underhand-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NKQ3P4M",
      }
    }
  ],
}
