// Local Constants
import {
  PANEL_DEFAULTS,
  PANEL_COMMANDS,
  PANEL_DEVICES,
  PANEL_OPTIONS,
  PANEL_VIEWS,
  CMD_SWITCH_VISIBILITY,
  CMD_STORE,
  CMD_UNDO,
  CMD_CORE_UNDO,
  CMD_REDO,
  CMD_CORE_REDO,
  CMD_PREVIEW,
  CMD_FULLSCREEN,
  CMD_CANVAS_CLEAR,
  CMD_CORE_OPEN_STYLES,
  CMD_CORE_OPEN_TRAITS,
  CMD_CORE_OPEN_LAYERS,
  CMD_CORE_OPEN_BLOCKS,
  CMD_OPEN_CODE,
  CMD_SET_DEVICE_DESKTOP,
  CMD_SET_DEVICE_TABLET,
  CMD_SET_DEVICE_MOBILE,
  EVENT_LOAD,
  EVENT_COMPONENT_SELECTED,
  ICON_CLASS_DEVICE_MOBILE,
  ICON_CLASS_DEVICE_TABLET,
  ICON_CLASS_DEVICE_DESKTOP,
  ICON_CLASS_OPEN_CODE,
  ICON_CLASS_OPEN_BLOCKS,
  ICON_CLASS_OPEN_LAYERS,
  ICON_CLASS_OPEN_TRAITS,
  ICON_CLASS_OPEN_STYLES,
  ICON_CLASS_CANVAS_CLEAR,
  ICON_CLASS_REDO,
  ICON_CLASS_UNDO,
  ICON_CLASS_FULLSCREEN,
  ICON_CLASS_PREVIEW,
  ICON_CLASS_SWITCH_VISIBILITY,
  ICON_CLASS_STORE,
} from '../constants'

// todo: go over this again and make sure there isn't anything in here we don't want.
// todo: can this be made more modular?
/**
 *
 * @param editor
 * @param config
 */
export function loadPanels(editor, config) {
  const panels = editor.Panels
  const editorConfig = editor.getConfig()
  editorConfig.showDevices = 0

  panels.getPanels().reset([
    {
      id: PANEL_COMMANDS,
      buttons: [{}
        // todo: title of current page, dropdown with button links?
        //{
        //  id: CMD_?,
        //  command: CMD_?,
        //  context: CMD_?,
        //  className: ICON_CLASS_?,
        //  attributes: { title: '' },
        //},
      ],
    },
    {
      id: PANEL_OPTIONS,
      buttons: [
        {
          id: CMD_STORE,
          command: CMD_STORE,
          context: CMD_STORE,
          className: ICON_CLASS_STORE,
          attributes: { title: 'Save' },
        },
        {
          id: CMD_SWITCH_VISIBILITY,
          command: CMD_SWITCH_VISIBILITY,
          context: CMD_SWITCH_VISIBILITY,
          className: ICON_CLASS_SWITCH_VISIBILITY,
          attributes: { title: 'Show Components' },
        },
        {
          id: CMD_PREVIEW,
          context: CMD_PREVIEW,
          command: e => e.runCommand(CMD_PREVIEW),
          className: ICON_CLASS_PREVIEW,
          attributes: { title: 'Preview' },
        },
        {
          id: CMD_FULLSCREEN,
          command: CMD_FULLSCREEN,
          context: CMD_FULLSCREEN,
          className: ICON_CLASS_FULLSCREEN,
          attributes: { title: 'Fullscreen' },
        },
        {
          id: CMD_UNDO,
          command: e => e.runCommand(CMD_CORE_UNDO),
          className: ICON_CLASS_UNDO,
          attributes: { title: 'Undo' },
        },
        {
          id: CMD_REDO,
          command: e => e.runCommand(CMD_CORE_REDO),
          className: ICON_CLASS_REDO,
          attributes: { title: 'Redo' },
        },
        {
          id: CMD_CANVAS_CLEAR,
          command: e => e.runCommand(CMD_CANVAS_CLEAR),
          className: ICON_CLASS_CANVAS_CLEAR,
          attributes: { title: 'Clear Canvas' },
        },
      ],
    },
    {
      id: PANEL_VIEWS,
      buttons  : [{
        id: CMD_CORE_OPEN_STYLES,
        command: CMD_CORE_OPEN_STYLES,
        active: 1,
        attributes: { title: 'Open Styles' },
        className: ICON_CLASS_OPEN_STYLES,
      },{
        id: CMD_CORE_OPEN_TRAITS,
        command: CMD_CORE_OPEN_TRAITS,
        attributes: { title: 'Open Traits' },
        className: ICON_CLASS_OPEN_TRAITS,
      },{
        id: CMD_CORE_OPEN_LAYERS,
        command: CMD_CORE_OPEN_LAYERS,
        attributes: { title: 'Open Layers' },
        className: ICON_CLASS_OPEN_LAYERS,
      },{
        id: CMD_CORE_OPEN_BLOCKS,
        command: CMD_CORE_OPEN_BLOCKS,
        attributes: { title: 'Open Blocks' },
        className: ICON_CLASS_OPEN_BLOCKS,
      },{
        id: CMD_OPEN_CODE,
        command: CMD_OPEN_CODE,
        attributes: { title: 'Open Code' },
        className: ICON_CLASS_OPEN_CODE,
      }],
    },
  ])

  // Add devices buttons
  const panelDevices = panels.addPanel({ id: PANEL_DEVICES })
  panelDevices.get('buttons').add([{
    id: CMD_SET_DEVICE_DESKTOP,
    command: CMD_SET_DEVICE_DESKTOP,
    context: PANEL_DEVICES,
    active: true,
    togglable: 1,
    className: ICON_CLASS_DEVICE_DESKTOP,
    attributes: { title: 'Set Device: Desktop' },
  },{
    id: CMD_SET_DEVICE_TABLET,
    command: CMD_SET_DEVICE_TABLET,
    context: PANEL_DEVICES,
    togglable: 1,
    className: ICON_CLASS_DEVICE_TABLET,
    attributes: { title: 'Set Device: Tablet' },
  },{
    id: CMD_SET_DEVICE_MOBILE,
    command: CMD_SET_DEVICE_MOBILE,
    context: PANEL_DEVICES,
    togglable: 1,
    className: ICON_CLASS_DEVICE_MOBILE,
    attributes: { title: 'Set Device: Mobile (portrait)' },
  }])


}
