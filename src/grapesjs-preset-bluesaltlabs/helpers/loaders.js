import * as actions     from '../actions'
import * as blocks      from '../blocks'
import * as events      from '../events'
import * as commands    from '../commands'
import * as components  from '../components'
import * as traits      from '../traits'
import * as keymaps     from '../keymaps'

// todo: try this out.
// Add plugins
//require('./traits').default(editor, options)
//require('./blocks').default(editor, options)
//require('./commands').default(editor, options)

// Local Constants
import {
  SHOW_LOADING_DEBUG_OUTPUT,
} from '../constants'

export function loadActions(editor, config) {
  if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug("fired loadActions", { actions: actions }) }

  const rte = editor.RichTextEditor

  //console.debug( "actions on load", { actions: rte.getAll() })
  // Remove initial actions
  // Note: this decimates any other plugins loaded before this one and is not really great practice....
  rte.getAll().forEach( ({ name }) => { rte.remove(name) } )

  // it'd probably make sense to replace specific ones loaded.

  // correct order:
  // [
  //   RTE_ACTION_BOLD,
  //   RTE_ACTION_ITALIC,
  //   RTE_ACTION_UNDERLINE,
  //   RTE_ACTION_STRIKE_THROUGH,
  //   RTE_ACTION_SUPERSCRIPT,
  //   RTE_ACTION_SUBSCRIPT,
  //   RTE_ACTION_LINK,
  //   RTE_ACTION_INDENT,
  //   RTE_ACTION_OUTDENT,
  //   RTE_ACTION_LIST_UNORDERED,
  //   RTE_ACTION_LIST_ORDERED,
  // ]

  Object.values(actions).forEach(InitAction => {
    if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug("loading action: ", { action: InitAction }) }
    InitAction(rte, config, editor)
  })
}

export function loadKeymaps(editor, config) {
  if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug("fired loadKeymaps", { keymaps: keymaps }) }

  const keymapManager = editor.Keymaps

  Object.values(keymaps).forEach(InitKeymap => {
    if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug("loading keymap: ", { command: InitKeymap }) }
    InitKeymap(keymapManager, config, editor)
  })

  /*
  // 'ns' is just a custom namespace
  keymaps.add('ns:my-keymap', '⌘+j, ⌘+u, ctrl+j, alt+u', editor => {
    console.log('do stuff');
  });
  // or
  keymaps.add('ns:my-keymap', '⌘+s, ctrl+s', 'some-gjs-command');

  // listen to events
  editor.on('keymap:emit', (id, shortcut, e) => {
    // ...
  })
  */

  //console.debug( keymaps.getAll() )
}

export function loadCommands(editor, config) {
  if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug("fired loadCommands", { commands: commands }) }

  const commandManager = editor.Commands

  Object.values(commands).forEach(InitCommand => {
    if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug("loading command: ", { command: InitCommand }) }
    InitCommand(commandManager, config, editor)
  })
}

export function loadEvents(editor, config) {
  if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug("fired loadEvents", { events: events }) }

  const eventManager = editor.EventManager

  Object.values(events).forEach(InitEvent => {
    if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug("loading event: ", { event: InitEvent }) }
    InitEvent(eventManager, config, editor)
  })
}

export function loadTraits(editor, config) {
  if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug("fired loadTraits", { traits: traits }) }

  const traitManager = editor.TraitManager

  Object.values(traits).forEach(InitTrait => {
    if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug("loading trait: ", { trait: InitTrait }) }
    InitTrait(traitManager, config, editor)
  })
}

export function loadComponents(editor, config) {
  if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug("fired loadComponents", { components: components }) }

  const domComponents = editor.DomComponents

  Object.values(components).forEach(InitComponent => {
    if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug("loading component: ", { component: InitComponent }) }
    InitComponent(domComponents, config, editor)
  })
}

export function loadBlocks(editor, config) {
  if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug("fired loadBlocks", { blocks: blocks }) }

  const blockManager = editor.BlockManager

  Object.values(blocks).forEach(InitBlock => {
    if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug("loading block: ", { block: InitBlock }) }
    InitBlock(blockManager, config, editor)
  })
}
