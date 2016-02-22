'use strict'
const describe = require('mocha').describe
const it = require('mocha').it
const beforeEach = require('mocha').beforeEach
const hexi = require('hexi')
const hexiVtree = require('..')
const request = require('supertest')
const h = require('virtual-dom/h')

describe('hexi-vtree', function () {
  let server

  beforeEach(() => {
    server = hexi()
    return server.register([hexiVtree])
  })

  it('should render virtual dom', function (done) {
    server.route({
      path: '/',
      method: 'GET',
      handler (req, res) {
        res.vtree(h('div', 'foo'))
      },
    })

    request(server.express)
      .get('/')
      .expect(200, '<div>foo</div>', done)
  })
})
