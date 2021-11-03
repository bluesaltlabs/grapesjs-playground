export * from './SetDevice'

export * from './CanvasClear'
export * from './Store'


// todo: interesting command:
// https://github.com/niiknow/grapesjs-components-farmer/blob/dcd4bb85f34c2f5c58be41d514d7d4fde9e86e68/src/index.js
/*
commands.add('get-usable-html', {
  run() {
    // get the builder xml
    let html = editor.getHtml()

    // convert into html
    for(let k in options.comps) {
      // default tag as div unless useTag value is provided
      const tag = options.comps[k].useTag || 'div'
      html = html.replace(new RegExp('<' + k, 'g'), '<' + tag)
      html = html.replace(new RegExp('</' + k + '>', 'g'), '</' + tag + '>')
      html = html.replace(new RegExp(` data\-gjs\-type\=\"${k}\" `, 'g'), ' ')
      html = html.replace(new RegExp(' data\-highlightable\=\"1\" ', 'g'), ' ')
    }

    return html
  }
})
*/

// used here: https://github.com/niiknow/grapesjs-components-farmer/blob/dcd4bb85f34c2f5c58be41d514d7d4fde9e86e68/example/init.js
// like this:
/*
cmdm.add('html-export-usable', {
  run: function(editor, sender) {
    sender && sender.set('active', 0)
    let viewer = codeViewer.editor
    modal.setTitle('Usable HTML')
    if (!viewer) {
      const txtarea = document.createElement('textarea')
      container.appendChild(txtarea)
      codeViewer.init(txtarea)
      viewer = codeViewer.editor
    }
    modal.setContent('')
    modal.setContent(container)
    codeViewer.setContent(editor.runCommand('get-usable-html'))
    modal.open()
    viewer.refresh()
  }
})

pnm.addButton('options',
  [
    {
      id: 'export',
      className: 'fa fa-download',
      command: 'html-export-usable',
      attributes: {
        title: 'Export usable HTML'
      }
    }
  ]
)
*/
