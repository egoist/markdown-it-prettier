const prettier = require('prettier')

function matchedLang(lang) {
  lang = lang.trim()
  return ['js', 'javascript', 'jsx', 'css', 'scss'].indexOf(lang) > -1
}

function getParser (lang) {
  return ['css', 'scss'].indexOf(lang.trim()) > -1 ? 'postcss' : 'babylon'
}

module.exports = function (md, opts, _prettier = prettier) {
  const originalFence = md.renderer.rules.fence
  // eslint-disable-next-line max-params
  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    const token = tokens[idx]
    if (matchedLang(token.info)) {
      try {
        token.content = _prettier.format(token.content, Object.assign({parser: getParser(token.info)}, opts))
      } catch (err) {
        // Ignore errors, simply skipping prettier
      }
    }
    return originalFence.call(this, tokens, idx, options, env, self)
  }
}

