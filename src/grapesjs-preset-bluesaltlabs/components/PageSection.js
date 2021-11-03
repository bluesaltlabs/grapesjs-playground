/**  **/

// Local Constants
import {
  COMPONENT_LAYOUT,
  COMPONENT_PAGE_SECTION,
  BOOTSTRAP_CONTEXTS,
  TRAIT_CLASS_SELECT,
} from '../constants'

// Helpers: todo: import elsewhere. this is not part of this plugin
// todo: check GrapesJS (there's a to lower case function or something, check there)
import {
  capitalize,
} from '../helpers'

export function PageSection(domComponents, config, editor) {
  const tagName     = 'div'
  //const tagName     = 'page_section'

  const layoutType  = domComponents.getType(COMPONENT_LAYOUT)
  const layoutModel = layoutType?.model
  const layoutView  = layoutType?.view ?? layoutType?.model?.prototype?.defaults?.view

  domComponents.addType(COMPONENT_PAGE_SECTION, {
    model: layoutModel.extend({
      defaults: Object.assign({}, layoutModel.prototype.defaults, {
        tagName:        tagName,
        name:           'Page Section',
        'custom-name':  'Page Section',
        classes:        ['page-section'],
        draggable:      `[data-gjs-type="wrapper"]`,
        droppable:      true,
        traits:         [
          {
            type: TRAIT_CLASS_SELECT,
            options: [
              { value: '',                      name: 'Regular' },
              { value: 'page-section-sm',       name: 'Small' },
              { value: 'page-section-lg',       name: 'Large' },
              { value: 'page-section-cta',      name: 'Call To Action' },
              { value: 'page-section-cta-sm',   name: 'Small Call To Action' },
              { value: 'page-section-img-bg',   name: 'Image Background' },
              { value: 'page-section-video-bg', name: 'Video Background' },
            ],
            label: 'Type',
          },
          {
            type: TRAIT_CLASS_SELECT,
            options: [
              { value: 'bg-default',    name: 'Default' },
              ...BOOTSTRAP_CONTEXTS.map((v) => { return {value: `bg-${v}`, name: capitalize(v)} }),
              { value: 'bg-gray',       name: 'Gray' },
              { value: 'bg-mid-gray',   name: 'Mid Gray' },
              { value: 'bg-light-gray', name: 'Light Gray' },
              { value: 'bg-black',      name: 'Black' },
              { value: 'bg-cyan',       name: 'Cyan' },
              { value: 'bg-indigo',     name: 'Indigo' },
              { value: 'bg-turquoise',  name: 'Turquoise' },
            ],
            label: 'Background',
          },
        ].concat(layoutModel?.prototype?.defaults?.traits ?? {}),
      }),
      }, {
        isComponent(el) {
          if(
            [COMPONENT_PAGE_SECTION].includes( `${el.tagName}`.toLowerCase() ) ||
            el?.classList?.contains('page-section')
          ) {
            return { type: COMPONENT_PAGE_SECTION }
          }
        }
      }),
    view: layoutView,
  })
}
