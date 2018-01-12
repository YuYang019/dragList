import { initMixin } from './drag/init'
// import { eventMixin } from './drag/event'
import { coreMixin } from './drag/core'

import { warn } from './util/util'

function DragList (el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el
  if (!this.wrapper) {
    warn('can not resolve the wrapper dom')
  }

  this._init(el, options)
}

initMixin(DragList)
// eventMixin(DragList)
coreMixin(DragList)

export default DragList
