import test from 'ava'
import { JSDOM } from 'jsdom'
import simulant from 'jsdom-simulant'

const dom = new JSDOM('<!DOCTYPE html><p>Hello <a href="#">world</a></p>')
const window = dom.window
const document = dom.window.document
const $ = require('jquery')(window)

test('native selection', t => {
  const qs = document.querySelector('p').textContent
  t.is(qs, 'Hello world')
})

test('jquery selection', t => {
  const jq = $('p').text()
  t.is(jq, 'Hello world')
})

test('fire event', t => {
  $('a').on('click', () => { $('p').text('Hello test') })
  const event = simulant(window, 'click')
  const element = document.querySelector('a')
  simulant.fire(element, event)
  t.is($('p').text(), 'Hello test')
})
