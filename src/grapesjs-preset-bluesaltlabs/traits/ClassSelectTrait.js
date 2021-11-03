import { intersection } from 'lodash'


// Local Constants
import {
  TRAIT_CLASS_SELECT,
} from '../constants'

/**
 * Select trait that maps a class list to the select options.
 * The default select option is set if the input has a class, and class list is modified when select value changes.
 * todo: figure out where this came from, see if it needs any improvement.
 *
 * @param traitManager
 * @param config
 * @param editor
 * @constructor
 */
export function ClassSelectTrait(traitManager, config, editor) {
  traitManager.addType(TRAIT_CLASS_SELECT, {
    events: {
      'change': 'onChange',  // trigger parent onChange method on input change
    },
    getInputEl: function() {
      if (!this.inputEl) {
        const model = this.model;
        const opts = model.get('options') || [];
        const input = document.createElement('select');
        const target_view_el = this.target.view.el;

        for(let i = 0; i < opts.length; i++) {
          let name = opts[i].name;
          let value = opts[i].value;
          if(value === '') { value = 'GJS_NO_CLASS'; } // 'GJS_NO_CLASS' represents no class--empty string does not trigger value change
          let option = document.createElement('option');
          option.text = name;
          option.value = value;
          const value_a = value.split(' ');
          if(intersection(target_view_el?.classList, value_a).length === value_a.length) {
            option.setAttribute('selected', 'selected');
          }
          input.append(option);
        }
        this.inputEl = input;
      }
      return this.inputEl;
    },

    onValueChange: function () {
      const classes = this.model.get('options').map(opt => opt.value)

      for(let i = 0; i < classes.length; i++) {
        if(classes[i].length > 0) {
          var classes_i_a = classes[i].split(' ')
          for(let j = 0; j < classes_i_a.length; j++) {
            if(classes_i_a[j].length > 0) {
              this.target.removeClass(classes_i_a[j])
            }
          }
        }
      }
      const value = this.model.get('value');
      if(value.length > 0 && value !== 'GJS_NO_CLASS') {
        const value_a = value.split(' ')
        for(let i = 0; i < value_a.length; i++) {
          this.target.addClass(value_a[i])
        }
      }
      this.target.em.trigger('component:toggled')
    }
  })
}
