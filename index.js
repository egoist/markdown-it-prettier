const prettier = require('prettier')

function matchedLang(lang) {
  return ['js', 'javascript', 'jsx'].indexOf(lang) > -1
}

module.exports = function (md) {
  const originalFence = md.renderer.rules.fence
  // eslint-disable-next-line max-params
  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    const token = tokens[idx]
    if (matchedLang(token.info)) {
      token.content = prettier.format(token.content, options.prettier)
    }
    return originalFence.call(this, tokens, idx, options, env, self)
  }
}
