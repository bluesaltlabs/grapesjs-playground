

//
export function Load(eventManager, config, editor) {


  // Set the Views -> Blocks panel button active
  const openBlocksBtn = panels.getButton(PANEL_VIEWS, CMD_CORE_OPEN_BLOCKS)
  editor.on(EVENT_LOAD, () => openBlocksBtn && openBlocksBtn.set('active', 1))


}
