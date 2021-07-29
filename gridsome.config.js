// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url:
        'your-api-url',
        fieldName: 'customField',
        typeName: 'customFieldTypes'
      }
    }],

  siteUrl: 'https://5810110644.github.io',
  pathPrefix: '/gridsome',
}