import test from 'ava'
import { JSDOM } from 'jsdom'

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)
const textContent = dom.window.document.querySelector('p').textContent

test('test', t => {
  t.is(textContent, 'Hello world')
})
