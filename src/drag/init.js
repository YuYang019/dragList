import {
  merge,
  addEvent,
  getStyle
} from '../util/util'

const DEFAULT_OPTIONS = {
  dargStart: null,
  dargEnd: null
}

export function initMixin (DragList) {
  DragList.prototype._init = function (el, options) {
    this.options = merge(options, DEFAULT_OPTIONS)
    console.log(this.options)

    this.item = Array.from(this.wrapper.children)
    this.itemData = this._initItemsData()

    this.wrapWidth = this.wrapper.offsetWidth
    this.wrapLeft = this.wrapper.offsetLeft

    this.itemKeys = Object.keys(this.itemData)
    this.keyLength = this.itemKeys.length

    this._initIndex()
    this._initEvent()
  }

  DragList.prototype._initIndex = function () {
    for (let i = 0; i < this.item.length; i++) {
      let el = this.item[i]
      el.setAttribute('data-index', i)
    }
  }

  DragList.prototype._initItemsData = function () {
    // 获取初始状态，每个节点的顶部底部基线
    let result = {}
    for (let i = 0; i < this.item.length; i++) {
        let el = this.item[i]
        let top = el.offsetTop
        let height = getStyle(el, 'height')

        result[i] = {
          topLine: top,
          bottomLine: top + height,
          el: el
        }
    }
    return result
  }

  DragList.prototype._initEvent = function () {
    addEvent(this.wrapper, 'mousedown', this._start.bind(this))
    addEvent(this.wrapper, 'transitionend', this._transitionEnd.bind(this))
    addEvent(document, 'mousemove', this._move.bind(this))
    addEvent(document, 'mouseup', this._end.bind(this))
  }
}
