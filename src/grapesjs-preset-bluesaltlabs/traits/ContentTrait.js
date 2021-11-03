// Local Constants
import {
  TRAIT_TEXT,
  TRAIT_CONTENT,
} from '../constants'

//
// https://www.microfocus.com/documentation/silk-test/200/en/silktestworkbench-help-en/SILKTEST-21EEFF3F-DIFFERENCEBETWEENTEXTCONTENTSINNERTEXTINNERHTML-REF.html
//

// todo: I can't figure out how to get this to work :/
export function ContentTrait(traitManager, config, editor) {
  const textTrait = traitManager.getType(TRAIT_TEXT)

  traitManager.addType(TRAIT_CONTENT, {
    //createLabel({ label }) {
    //  return `<div>
    //  <div>Before</div>
    //  ${label}
    //  <div>After</div>
    //</div>`;
    //},
    createInput({ component, trait, elInput }) {

      //const traitOpts = trait.get('innerHTML') || trait.get('content') || '';
      const traitContentValue = component?.get('content') || trait?.get('content') || null;

      if(traitContentValue !== '' && !traitContentValue) {
        return null
      }

      let el = document.createElement('textarea')
      el.className = `${TRAIT_CONTENT}`
      el.innerHTML = traitContentValue

      return el
    },

    onEvent({ component }) {

    },

    onUpdate({ component }) {
      const value = component?.content ?? ''
      //this.

    },


  })

//  traitManager.addType(TRAIT_CONTENT, {
//    // Expects as return a simple HTML string or an HTML element
//    createInput({ trait }) {
//      // Here we can decide to use properties from the trait
//      const traitOpts = trait.get('options') || [];
//      const options = traitOpts.length ? traitOpts : [
//        { id: 'url', name: 'URL' },
//        { id: 'email', name: 'Email' },
//      ];
//
//      // Create a new element container and add some content
//      const el = document.createElement('div');
//      el.innerHTML = `
//      <select class="href-next__type">
//        ${options.map(opt => `<option value="${opt.id}">${opt.name}</option>`).join('')}
//      </select>
//      <div class="href-next__url-inputs">
//        <input class="href-next__url" placeholder="Insert URL"/>
//      </div>
//      <div class="href-next__email-inputs">
//        <input class="href-next__email" placeholder="Insert email"/>
//        <input class="href-next__email-subject" placeholder="Insert subject"/>
//      </div>
//    `;
//
//      // Let's make our content interactive
//      const inputsUrl = el.querySelector('.href-next__url-inputs');
//      const inputsEmail = el.querySelector('.href-next__email-inputs');
//      const inputType = el.querySelector('.href-next__type');
//      inputType.addEventListener('change', ev => {
//        switch (ev.target.value) {
//          case 'url':
//            inputsUrl.style.display = '';
//            inputsEmail.style.display = 'none';
//            break;
//          case 'email':
//            inputsUrl.style.display = 'none';
//            inputsEmail.style.display = '';
//            break;
//        }
//      });
//
//      return el;
//    },
//  }


  //events: {
  //  'keyup': 'onChange',

  //},

  //init() {
    // If you need to react to some change of the trait you can subscribe to their attribute listeners
    // this.on('change:attributes:type', this.handleTypeChange);
  //},
  // example:
  // handleTypeChange() {
  //   console.log('Input type changed to: ', this.getAttributes().type);
  // },

  // onValueChange: function () {
  //   let model = this.model
  //   let target = model.target
  //   target.set('content', model.get('value'))
  // },
  //
  // getInputEl: function() {
  //   if(!this.inputEl) {
  //     this.inputEl = textTrait.prototype.getInputEl.bind(this)()
  //     this.inputEl.value = this.target.get('content')
  //   }
  //   return this.inputEl
  // }
}




