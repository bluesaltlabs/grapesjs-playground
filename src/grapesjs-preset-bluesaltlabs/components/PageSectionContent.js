/**  **/

// Local Constants
import {
  COMPONENT_DEFAULT,
  COMPONENT_PAGE_SECTION,
  COMPONENT_PAGE_SECTION_CONTENT,
  TRAIT_CLASS_SELECT,
} from '../constants'

export function PageSectionContent(domComponents, config, editor) {
  const tagName     = 'div'

  const defaultType   = domComponents.getType(COMPONENT_DEFAULT)
  const defaultModel  = defaultType.model
  const defaultView   = defaultType?.view ?? defaultType?.model?.prototype?.defaults?.view

  domComponents.addType(COMPONENT_PAGE_SECTION_CONTENT, {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        tagName:        tagName,
        name:           'Page Section Content',
        'custom-name':  'Page Section Content',
        draggable:      `[data-gjs-type="${COMPONENT_PAGE_SECTION}"]`,
        classes:        ['page-section-content'],
        droppable:      true,
        traits:         [
         {
           type:    TRAIT_CLASS_SELECT,
           options: [
             { value: '', name: 'Regular' },
             { value: 'page-section-content-sm', name: 'Small' },
             { value: 'page-section-content-lg', name: 'Large' },
           ],
           label:   'Variant',
         },
         {
           type:    TRAIT_CLASS_SELECT,
           options: [
             { value: '', name: '-' },
             { value: 'container', name: 'Regular' },
             { value: 'container-fluid', name: 'Fluid' },
           ],
           label:   'Container Variant',
         },
        ].concat(defaultModel?.prototype?.defaults?.traits ?? {}),
      }),
    }, {
      isComponent(el) {
        if(
          [COMPONENT_PAGE_SECTION_CONTENT].includes( `${el.tagName}`.toLowerCase() ) ||
          (
            el?.classList?.contains('page-section-content') ||
            el?.classList?.contains('page-section-content-sm') ||
            el?.classList?.contains('page-section-content-lg')
          )
        ) {
          return { type: COMPONENT_PAGE_SECTION_CONTENT }
        }
      }
    }),
    view: defaultView,
  })
}

