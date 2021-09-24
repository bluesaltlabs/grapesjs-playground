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
  CMD_HTML_CODE_EDITOR,
  CMD_CANVAS_CLEAR,
  CMD_OPEN_STYLE_MANAGER,
  CMD_OPEN_TRAIT_MANAGER,
  CMD_OPEN_LAYERS,
  CMD_OPEN_BLOCKS,
  CMD_OPEN_CODE,
  CMD_SET_DEVICE_DESKTOP,
  CMD_SET_DEVICE_TABLET,
  CMD_SET_DEVICE_MOBILE,
  EVENT_LOAD,
  EVENT_COMPONENT_SELECTED,
} from '../constants'

// todo: go over this again and make sure there isn't anything in here we don't want.
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
      buttons: [{}],
    },
    {
      id: PANEL_OPTIONS,
      buttons: [
        {
          id: CMD_STORE,
          command: CMD_STORE,
          context: CMD_STORE,
          className: 'fas fa-save',
          attributes: { title: 'Save' },
        },
        {
          id: CMD_SWITCH_VISIBILITY,
          command: CMD_SWITCH_VISIBILITY,
          context: CMD_SWITCH_VISIBILITY,
          className: 'fas fa-border-none',
          attributes: { title: 'Show Components' },
        },
        {
          id: CMD_PREVIEW,
          context: CMD_PREVIEW,
          command: e => e.runCommand(CMD_PREVIEW),
          className: 'fas fa-eye',
          attributes: { title: 'Preview' },
        },
        {
          id: CMD_FULLSCREEN,
          command: CMD_FULLSCREEN,
          context: CMD_FULLSCREEN,
          className: 'fas fa-expand-alt',
          attributes: { title: 'Fullscreen' },
        },
        {
          id: CMD_UNDO,
          command: e => e.runCommand(CMD_CORE_UNDO),
          className: 'fas fa-undo',
          attributes: { title: 'Undo' },
        },
        {
          id: CMD_REDO,
          command: e => e.runCommand(CMD_CORE_REDO),
          className: 'fas fa-redo',
          attributes: { title: 'Redo' },
        },
        {
          id: CMD_HTML_CODE_EDITOR,
          command: CMD_HTML_CODE_EDITOR,
          className: 'fas fa-edit',
          attributes: { title: 'Edit HTML' },
        },
        {
          id: CMD_CANVAS_CLEAR,
          command: e => e.runCommand(CMD_CANVAS_CLEAR),
          className: 'fas fa-trash',
          attributes: { title: 'Clear Canvas' },
        },
      ],
    },
    {
      id: PANEL_VIEWS,
      buttons  : [{
        id: CMD_OPEN_STYLE_MANAGER,
        command: CMD_OPEN_STYLE_MANAGER,
        active: 1,
        className: 'fa fa-paint-brush',
      },{
        id: CMD_OPEN_TRAIT_MANAGER,
        command: CMD_OPEN_TRAIT_MANAGER,
        className: 'fa fa-cog',
      },{
        id: CMD_OPEN_LAYERS,
        command: CMD_OPEN_LAYERS,
        className: 'fa fa-bars',
      },{
        id: CMD_OPEN_BLOCKS,
        command: CMD_OPEN_BLOCKS,
        className: 'fa fa-th-large',
      },
      {
        id: CMD_OPEN_CODE,
        command: CMD_OPEN_CODE,
        attributes: { title: 'Open Code' },
        className: 'fas fa-code',
      }],
    },
  ])

  // Add devices buttons
  const panelDevices = panels.addPanel({ id: PANEL_DEVICES });
  panelDevices.get('buttons').add([{
    id: CMD_SET_DEVICE_DESKTOP,
    command: CMD_SET_DEVICE_DESKTOP,
    context: PANEL_DEVICES,
    active: true,
    togglable: 1,
    className: 'fas fa-desktop',
    attributes: { title: 'Set Device: Desktop' },
  },{
    id: CMD_SET_DEVICE_TABLET,
    command: CMD_SET_DEVICE_TABLET,
    context: PANEL_DEVICES,
    togglable: 1,
    className: 'fas fa-tablet-alt',
    attributes: { title: 'Set Device: Tablet' },
  },{
    id: CMD_SET_DEVICE_MOBILE,
    command: CMD_SET_DEVICE_MOBILE,
    context: PANEL_DEVICES,
    togglable: 1,
    className: 'fas fa-mobile-alt',
    attributes: { title: 'Set Device: Mobile (portrait)' },
  }]);

  // Set the Views -> Blocks panel button active
  const openBlocksBtn = panels.getButton(PANEL_VIEWS, CMD_OPEN_BLOCKS)
  editor.on(EVENT_LOAD, () => openBlocksBtn && openBlocksBtn.set('active', 1))

  // On component change show the Style Manager
  config.showStylesOnChange && editor.on(EVENT_COMPONENT_SELECTED, () => {
    const openStyleManagerBtn = panels.getButton(PANEL_VIEWS, CMD_OPEN_STYLE_MANAGER);
    const openLayersBtn = panels.getButton(PANEL_VIEWS, CMD_OPEN_LAYERS);

    // Don't switch when the Layer Manager is on or
    // there is no selected component
    if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
      openStyleManagerBtn && openStyleManagerBtn.set('active', 1);
    }
  });
}
