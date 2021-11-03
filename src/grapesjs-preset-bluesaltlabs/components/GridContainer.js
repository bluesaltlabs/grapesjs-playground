/**  **/

// Local Constants
import {
  COMPONENT_LAYOUT,
  COMPONENT_GRID_CONTAINER,
  TRAIT_CLASS_SELECT,
} from '../constants'

export function GridContainer(domComponents) {
  const tagName     = 'div'

  const layoutType  = domComponents.getType(COMPONENT_LAYOUT)
  const layoutModel = layoutType?.model
  const layoutView  = layoutType?.view ?? layoutType?.model?.prototype?.defaults?.view

  domComponents.addType(COMPONENT_GRID_CONTAINER, {
    model: layoutModel.extend({
      defaults: Object.assign({}, layoutModel.prototype.defaults, {
        tagName:        tagName,
        name:           'Grid Container',
        'custom-name':  'Grid Container',
        droppable:      true,
        traits: [
          {
            type: TRAIT_CLASS_SELECT,
            options: [
              { value: 'container',       name: 'Fixed' },
              { value: 'container-fluid', name: 'Fluid' },
            ],
            label: 'Container Type',
          },
        ].concat(layoutModel?.prototype?.defaults?.traits ?? {}),
      }),
    }, {
      isComponent(el) {
        if(
          [COMPONENT_GRID_CONTAINER].includes( `${el.tagName}`.toLowerCase() ) ||
          el?.classList?.contains('container') ||
          el?.classList?.contains('container-fluid')
        ) {
          return { type: COMPONENT_GRID_CONTAINER }
        }
      }
    }),
    view: layoutView,
  })
}
