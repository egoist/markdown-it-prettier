import fs from 'fs'
import test from 'ava'
import Markdown from 'markdown-it'
import markdownItPrettier from '../'

test('main', t => {
  const md = new Markdown()
  md.use(markdownItPrettier, {
    singleQuote: true
  })
  const out = md.render(fs.readFileSync('./test/fixture/foo.md', 'utf8'))
  t.snapshot(out)
})
