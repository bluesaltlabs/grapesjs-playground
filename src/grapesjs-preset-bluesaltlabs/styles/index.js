// Local Constants
// import {
//   SM_SECTOR_GENERAL,
//   SM_SECTOR_LAYOUT,
//   SM_SECTOR_TYPOGRAPHY,
//   SM_SECTOR_DECORATIONS,
//   SM_SECTOR_EXTRA,
// } from '../constants'

// todo:
export function loadStyles(editor, config) {
  const sm = editor.StyleManager;
  const csm = config.customStyleManager;

  // sm.getSectors().reset(csm && csm.length ? csm : [
  //   {
  //     name: SM_SECTOR_GENERAL,
  //     open: false,
  //     buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
  //   },
  //   {
  //     name: SM_SECTOR_LAYOUT,
  //     open: false,
  //     buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
  //   },
  //   {
  //     name: SM_SECTOR_TYPOGRAPHY,
  //     open: false,
  //     buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
  //     properties: [{
  //       property: 'text-align',
  //       list: [
  //         { value: 'left', className: 'fa fa-align-left' },
  //         { value: 'center', className: 'fa fa-align-center'  },
  //         { value: 'right', className: 'fa fa-align-right' },
  //         { value: 'justify', className: 'fa fa-align-justify' },
  //       ],
  //     }]
  //   },
  //   {
  //     name: SM_SECTOR_DECORATIONS,
  //     open: false,
  //     buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
  //   },
  //   {
  //     name: SM_SECTOR_EXTRA,
  //     open: false,
  //     buildProps: ['transition', 'perspective', 'transform'],
  //   },
  // ]);
}
