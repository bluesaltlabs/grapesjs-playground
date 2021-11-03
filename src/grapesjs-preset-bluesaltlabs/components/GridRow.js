/**  **/

// Local Constants
import {
  COMPONENT_LAYOUT,
  COMPONENT_GRID_CONTAINER,
  COMPONENT_GRID_ROW,
  COMPONENT_GRID_COLUMN,
  TRAIT_CLASS_SELECT,
} from '../constants'

const ROW_COL_OPTIONS = [
  { value: '', }
]

export function GridRow(domComponents, config, editor) {
  const tagName     = 'div'

  const layoutType  = domComponents.getType(COMPONENT_LAYOUT)
  const layoutModel = layoutType?.model
  const layoutView  = layoutType?.view ?? layoutType?.model?.prototype?.defaults?.view

  domComponents.addType(COMPONENT_GRID_ROW, {
    model: layoutModel.extend({
      defaults: Object.assign({}, layoutModel.prototype.defaults, {
        tagName:        tagName,
        name:           'Grid Row',
        'custom-name':  'Grid Row',
        // icon:           ``, // todo
        draggable:      `[data-gjs-type="${COMPONENT_GRID_CONTAINER}"]`,
        classes:        ['row'],
        traits: [
          {
            type: TRAIT_CLASS_SELECT,
            options: [
              { value: '',       name: 'Normal' },
              { value: 'no-cutters', name: 'No Gutters' },
            ],
            label: 'Gutters',
          },
          {
            type: TRAIT_CLASS_SELECT,
            options: [
              { value: '',       name: 'Normal' },
              { value: 'row-cols-', name: 'No Gutters' },
            ],
            label: 'Row Columns',
          },
        ].concat(layoutModel?.prototype?.defaults?.traits ?? {}),
      }),
    }, {
      isComponent(el) {
        if(
          [COMPONENT_GRID_ROW].includes( `${el.tagName}`.toLowerCase() ) ||
          el?.classList?.contains('row')
        ) {
          return { type: COMPONENT_GRID_ROW }
        }
      }
    }),
    view: layoutView,
  })
}
