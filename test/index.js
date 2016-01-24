'use strict'
const hexi = require('hexi')
const hexiVtree = require('..')
const request = require('supertest')
const h = require('virtual-dom/h')

describe('hexi-vtree', function() {
  let server

  beforeEach(function(next) {
    server = new hexi.Server()
    server.register([hexiVtree], next)
  })

  it('should render virtual dom', function(done) {
    server.route({
      path: '/',
      method: 'GET',
      handler(req, res) {
        res.vtree(h('div', 'foo'))
      },
    })

    request(server.express)
      .get('/')
      .expect(200, '<div>foo</div>', done)
  })
})
