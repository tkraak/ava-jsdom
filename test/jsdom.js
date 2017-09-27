import test from 'ava'
import { JSDOM } from 'jsdom'

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)
const $ = require('jquery')(dom.window) // eslint-disable-line no-unused-vars
const qs = dom.window.document.querySelector('p').textContent
const jq = $('p').text()

test('querySelector', t => {
  t.is(qs, 'Hello world')
})

test('jquery', t => {
  t.is(jq, 'Hello world')
})
