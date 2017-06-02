const prettier = require('prettier')

function matchedLang(lang) {
  lang = lang.trim()
  return ['js', 'javascript', 'jsx'].indexOf(lang) > -1
}

module.exports = function (md, opts) {
  const originalFence = md.renderer.rules.fence
  // eslint-disable-next-line max-params
  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    const token = tokens[idx]
    if (matchedLang(token.info)) {
      try {
        token.content = prettier.format(token.content, opts)
      } catch (err) {
        // Ignore errors, simply skipping prettier
      }
    }
    return originalFence.call(this, tokens, idx, options, env, self)
  }
}
