
export function getBlockLabelHtml(label, iconHtml = null) {
  return `<div class="gjs-block__icon">${iconHtml ?? `<span class="gjs-block__icon_letter">${label.charAt(0).toUpperCase()}</span>`}</div><span class="gjs-block__label">${label}</span>`
}

export function getBlockIconSvg(iconPath) {
  return import(`${iconPath}`)
}

export function attrsToString(attrs) {
  const result = []

  for (let key in attrs) {
    let value = attrs[key]
    const toParse = value instanceof Array || value instanceof Object
    value = toParse ? JSON.stringify(value) : value
    result.push(`${key}=${toParse ? `'${value}'` : `"${value}"`}`)
  }

  return result.length ? ` ${result.join(' ')}` : ''
}


export function capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function unCapitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toLowerCase() + s.slice(1)
}
