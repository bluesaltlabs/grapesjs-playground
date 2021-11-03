/**  **/

// Local Constants
import {
  COMPONENT_LAYOUT,
  COMPONENT_GRID_CONTAINER,
  COMPONENT_GRID_ROW,
  COMPONENT_GRID_COLUMN,
  TRAIT_CLASS_SELECT,
} from '../constants'

const COL_OPTIONS = [
  { value: '',       name: '-' },
  { value: '',       name: '1' },
  { value: '',       name: '2' },
  { value: '',       name: '3' },
  { value: '',       name: '4' },
  { value: '',       name: '5' },
  { value: '',       name: '6' },
  { value: '',       name: '7' },
  { value: '',       name: '8' },
  { value: '',       name: '9' },
  { value: '',       name: '10' },
  { value: '',       name: '11' },
  { value: '',       name: '12' },
  { value: '',       name: 'auto' },
]



export function GridColumn(domComponents, config, editor) {
  const tagName     = 'div'
  //const tagName     = 'grid_column'

  const layoutType  = domComponents.getType(COMPONENT_LAYOUT)
  const layoutModel = layoutType?.model
  const layoutView  = layoutType?.view ?? layoutType?.model?.prototype?.defaults?.view

  // debug
  console.debug("from GridColumn", {
    col_options:      getColOptions(),
    col_options_sm:   getColOptions('sm'),
    col_options_md:   getColOptions('md'),
    col_options_lg:   getColOptions('lg'),
    col_options_xl:   getColOptions('xl'),
    col_options_xxl:  getColOptions('xxl'),
  })

  domComponents.addType(COMPONENT_GRID_COLUMN, {
    model: layoutModel.extend({
      defaults: Object.assign({}, layoutModel.prototype.defaults, {
        tagName:        tagName,
        name:           'Grid Column',
        'custom-name':  'Grid Column',
        // icon:           ``, // todo
        draggable:      `[data-gjs-type="${COMPONENT_GRID_ROW}"],[data-gjs-type="${COMPONENT_GRID_CONTAINER}"]`,
        classes:        ['col'], // todo?
        traits:         [
          {
            type: TRAIT_CLASS_SELECT,
            options: [
              { value: '',       name: 'Normal' },
              { value: 'no-gutters', name: 'No Gutters' },
            ],
            label: 'Gutters',
          },

          // Breakpoint Classes
          // todo: set based on value of class currently assigned!
          {
            type: TRAIT_CLASS_SELECT,
            options: getColOptions(),
            label: '<span>col-</span>',
          },
          {
            type: TRAIT_CLASS_SELECT,
            options: getColOptions('sm'),
            label: '<span>col-sm-</span>',
          },
          {
            type: TRAIT_CLASS_SELECT,
            options: getColOptions('md'),
            label: '<span>col-md-</span>',
          },
          {
            type: TRAIT_CLASS_SELECT,
            options: getColOptions('lg'),
            label: '<span>col-lg-</span>',
          },
          {
            type: TRAIT_CLASS_SELECT,
            options: getColOptions('xl'),
            label: '<span>col-xl-</span>',
          },
          // todo: breakpoint classes
        ].concat(layoutModel?.prototype?.defaults?.traits ?? {}),
      }),
    }, {
      isComponent(el) {
        if(
          [COMPONENT_GRID_COLUMN].includes( `${el.tagName}`.toLowerCase() ) ||
          (
            el?.classList?.contains('col') ||
            (el?.classList?.forEach(classItem => `${classItem}`.toLowerCase().startsWith('col') ))
          )
        ) {
          return { type: COMPONENT_GRID_COLUMN }
        }
      }
    }),
    view: layoutView,
  })
}

function getColOptions(sizeSlug = '') {
  const baseString  = `col-${sizeSlug ? `${sizeSlug}-` : ''}`
  const sizes       = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return [
    {
      value:  ``,
      name:   `-`,
    },
    {
      value:  `auto`,
      name:   `Auto`,
    }
  ].concat(sizes.map(size => ({
    value:  `${baseString}${size}`,
    name:   `${size} / 12`,
  })))
}
