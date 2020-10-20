const NextI18Next = require('next-i18next/dist/commonjs').default
const path = require('path')

module.exports = new NextI18Next({
  localeSubpaths: {},
  defaultLanguage: 'ja',
  otherLanguages: ['en', 'ja'],
  localePath: path.resolve('./public/static/locales')
})