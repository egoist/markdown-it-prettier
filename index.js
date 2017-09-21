const css = ['css', 'scss', 'less']

function matchedLang(lang) {
  lang = lang.trim()
  return ['js', 'javascript', 'jsx', ...css].indexOf(lang) > -1
}

function getParser (lang) {
  return css.indexOf(lang.trim()) > -1 ? 'postcss' : 'babylon'
}

module.exports = function (md, opts, prettier) {
  const originalFence = md.renderer.rules.fence
  // eslint-disable-next-line max-params
  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    const token = tokens[idx]
    if (matchedLang(token.info)) {
      try {
        token.content = prettier.format(token.content, Object.assign({parser: getParser(token.info)}, opts))
      } catch (err) {
        // Ignore errors, simply skipping prettier
      }
    }
    return originalFence.call(this, tokens, idx, options, env, self)
  }
}

