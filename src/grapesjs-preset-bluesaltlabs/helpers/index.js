export * from './string'
export * from './rte'

// note: DO NOT CHANGE THE ORDER OF THIS ONE FROM THE ONES BEFORE IT:
export * from './loaders'

export { loadPanels }   from '../panels'
export { loadStyles }   from '../styles'


// export function getBlockLabelHtml(label, iconHtml = null) {
//  return `<div class="gjs-block__icon">${iconHtml ?? `<span class="gjs-block__icon_letter">${label.charAt(0).toUpperCase()}</span>`}</div><span class="gjs-block__label">${label}</span>`
// }

// export function getBlockIconSvg(iconPath) {
//   return import(`${iconPath}`)
// }

// export function attrsToString(attrs) {
//   const result = []

//   for (let key in attrs) {
//     let value = attrs[key]
//     const toParse = value instanceof Array || value instanceof Object
//     value = toParse ? JSON.stringify(value) : value
//     result.push(`${key}=${toParse ? `'${value}'` : `"${value}"`}`)
//   }

//   return result.length ? ` ${result.join(' ')}` : ''
// }
