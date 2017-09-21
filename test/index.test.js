const fs = require('fs')
const Markdown = require('markdown-it')
const prettier = require('prettier')
const markdownItPrettier = require('../')

test('main', () => {
  const md = new Markdown()
  md.use(markdownItPrettier, {
    singleQuote: true
  }, prettier)
  const out = md.render(fs.readFileSync('./test/fixture/foo.md', 'utf8'))
  expect(out).toBe(fs.readFileSync('./test/fixture/foo.html', 'utf8'))
})
