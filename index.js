'use strict'
const toHTML = require('vdom-to-html')

module.exports = (server, opts) => {
  server.express.use((req, res, next) => {
    res.vtree = vtree => res.send(toHTML(vtree))
    next()
  })
}

module.exports.attributes = {
  pkg: require('./package.json'),
}
