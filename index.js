const prettier = require('prettier')

const LANGS = {
  css: 'css',
  less: 'less',
  scss: 'scss',
  sass: 'scss',
  js: 'babylon',
  jsx: 'babylon',
  javascript: 'babylon',
  ts: 'typescript',
  typescript: 'typescript',
  json: 'json',
  graphql: 'graphql'
}

function getParser(lang) {
  lang = lang.trim()
  return LANGS[lang]
}

module.exports = function (md, opts) {
  const originalFence = md.renderer.rules.fence
  // eslint-disable-next-line max-params
  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    const token = tokens[idx]
    const parser = getParser(token.info)
    if (parser) {
      try {
        token.content = prettier.format(token.content, Object.assign({}, opts, {
          parser
        }))
      } catch (err) {
        // Ignore errors, simply skipping prettier
      }
    }
    return originalFence.call(this, tokens, idx, options, env, self)
  }
}
