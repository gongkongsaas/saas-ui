const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'saas-ui',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/a111/Desktop/saas-ui/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: './components/**/*.{md,markdown,mdx}',
        public: '/public',
        dest: 'doc-site',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'saas-ui',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/a111/Desktop/saas-ui',
          templates:
            '/Users/a111/Desktop/saas-ui/node_modules/docz-core/dist/templates',
          docz: '/Users/a111/Desktop/saas-ui/.docz',
          cache: '/Users/a111/Desktop/saas-ui/.docz/.cache',
          app: '/Users/a111/Desktop/saas-ui/.docz/app',
          appPackageJson: '/Users/a111/Desktop/saas-ui/package.json',
          appTsConfig: '/Users/a111/Desktop/saas-ui/tsconfig.json',
          gatsbyConfig: '/Users/a111/Desktop/saas-ui/gatsby-config.js',
          gatsbyBrowser: '/Users/a111/Desktop/saas-ui/gatsby-browser.js',
          gatsbyNode: '/Users/a111/Desktop/saas-ui/gatsby-node.js',
          gatsbySSR: '/Users/a111/Desktop/saas-ui/gatsby-ssr.js',
          importsJs: '/Users/a111/Desktop/saas-ui/.docz/app/imports.js',
          rootJs: '/Users/a111/Desktop/saas-ui/.docz/app/root.jsx',
          indexJs: '/Users/a111/Desktop/saas-ui/.docz/app/index.jsx',
          indexHtml: '/Users/a111/Desktop/saas-ui/.docz/app/index.html',
          db: '/Users/a111/Desktop/saas-ui/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
