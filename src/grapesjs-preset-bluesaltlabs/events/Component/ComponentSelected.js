


/*

// On component change show the Style Manager
  if(config?.showStylesOnComponentSelect || config?.showTraitsOnComponentSelect) {
    editor.on(EVENT_COMPONENT_SELECTED, () => {

      //const openStyleManagerBtn = panels.getButton(PANEL_VIEWS, CMD_CORE_OPEN_STYLES)
      const openManagerBtn = panels.getButton(PANEL_VIEWS,
        config?.showStylesOnComponentSelect ? CMD_CORE_OPEN_STYLES :
        config?.showTraitsOnComponentSelect ? CMD_CORE_OPEN_TRAITS :
      null)

      //console.debug({ openManagerBtn: openManagerBtn })

      const openLayersBtn = panels.getButton(PANEL_VIEWS, CMD_CORE_OPEN_LAYERS)
      const openCodeBtn   = panels.getButton(PANEL_VIEWS, CMD_OPEN_CODE)

      console.debug("", { openCodeBtn: openCodeBtn, openLayersBtn: openLayersBtn })

      // Don't switch when the Layer Manager or Code Editor is on or
      // there is no selected component
      if ((
          (!openLayersBtn || !openLayersBtn.get('active')) ||
          (!openCodeBtn   || !openCodeBtn.get('active'))
        ) && editor.getSelected()
      ) {
        openManagerBtn && openManagerBtn.set('active', 1)
      }
    })
  }
*/
