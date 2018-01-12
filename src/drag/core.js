import {
  getStyle,
  addClass,
  removeClass
} from '../util/util'

// 当前被拖动元素的信息
const obj = {
  el: null,
  index: null,
  direction: null,
  x: null,
  y: null,
  diffX: null,
  diffY: null,
  width: null,
  height: null,
  centerX: null,
  centerY: null
}

const transitionStyle = '0.2s all cubic-bezier(0.17,0,0,1)'

let isDrag = false
let isMouseDown = false
let zIndex = 10

let documentHeight = document.body.offsetHeight
let screenHeight = window.screen.height
let limit = 10

// 放开拖拽元素时，元素目标位置的下一个节点，用于insetBefore调用。
let afterElem
// 用于判断鼠标移动方向，上一次操作的鼠标的x, y值
let oldX, oldY
// 用于将节点移出列表，再插入的情况
let outY, inY
let isOut = false

export function coreMixin (DragList) {
  DragList.prototype._start = function (e) {
    if (this.wrapper.contains(e.target)) {
      oldX = e.pageX
      oldY = e.pageY
      isMouseDown = true
    }
  }

  DragList.prototype._move = function (e) {
    // 当鼠标按下且移动了3px，才认为用户进行了拖动
    if (!isDrag && isMouseDown) {
      let newX = e.pageX
      let newY = e.pageY
      let diffX = newX - oldX
      let diffY = newY - oldY

      let distance = Math.sqrt(diffX * diffX + diffY * diffY)

      if (distance > 3) {
          // 初始化当前拖动元素的数据
          this._initObjData(e)

          if (this.options.dragStart) {
              this.options.dragStart.call(this, obj.el)
          }
      }
    }

    if (isDrag) {
      // 被拖拽元素应该translate的x,y值
      let x = e.pageX - obj.diffX - obj.x
      let y = e.pageY - obj.diffY - obj.y

      obj.el.style.transform = `translate(${x}px, ${y}px)`

      // 判断拖拽元素的移动方向
      if (e.pageY - oldY > 0) {
          obj.direction = 'down'
      } else if (e.pageY - oldY < 0) {
          obj.direction = 'up'
      } else {
          obj.direction = 'nochange'
      }

      // 更新
      oldY = e.pageY

      // 元素中心的x, y值
      obj.centerX = e.pageX - obj.diffX + obj.width / 2
      obj.centerY = e.pageY - obj.diffY + obj.height / 2

      // 被拖拽元素的中心应该在wrapper左右范围内
      // 有一个bug，一次被拖拽了大于1个位置，会阻塞，原因是查找范围不对，
      // 导致无效的循环查找阻塞，所以需要特殊处理从外面插入进来的情况
      if (obj.centerX >= this.wrapLeft && obj.centerX <= this.wrapLeft + this.wrapWidth) {
          if (isOut) {
             // 说明当前从外部进入wapper
            inY = e.pageY
            isOut = false
            if (inY - outY > 0) {
                obj.direction = 'down'
            } else if (inY - outY < 0) {
                obj.direction = 'up'
            }
            outY = null
            inY = null
          }
          // 寻找被进入的元素位置,然后更新
          this.findIndexAndUpdate(obj.centerY)
      } else {
          // 离开wrapper区域，记录当前y值
          if (!outY) {
              outY = e.pageY
          }
          isOut = true
      }
    }
  }

  DragList.prototype.findIndexAndUpdate = function (centerY) {
    let curIndex = obj.index

    // 上一个元素的下边界，如果是第一个元素，那么它的上边界为－2*h
    let position1 = (this.itemData[curIndex - 1] && this.itemData[curIndex - 1].bottomLine) || -screenHeight
    // 下一个元素的上边界，如果是最后一个元素，那么它的下边界为整个文档高度 + 2h
    let position2 = (this.itemData[curIndex + 1] && this.itemData[curIndex + 1].topLine) || documentHeight + screenHeight

    // 防止无效遍历，比如被拖动元素只是在它原来的位置稍微拖动了一下，没有换位置，这个时候就不需要遍历
    if (centerY >= position1 && centerY <= position2) {
        return
    }

    // 由移动方向确定遍历范围
    if (obj.direction === 'up') {
        // 向上找
        this.lookUp(curIndex, centerY)
    } else if (obj.direction === 'down') {
        // 向下找
        this.lookDown(curIndex, centerY)
    }
  }

  DragList.prototype.lookUp = function (curIndex, centerY) {
    if (curIndex > limit) {
      let isFind = false
      // 一次查找limit个
      // j为大的循环次数，比如从被拖拽的index是34，然后就要循环j次。34-24,24-14,14-4,4-0
      // 防止一次循环太多
      let j = Math.ceil(curIndex / limit)
      for (let i = 1; i <= j; i++) {
          let start = (curIndex - i * limit) > 0 ? (curIndex - i * limit) : -1
          let end = curIndex - (i - 1) * limit
          // 向上查找时，循环应该从靠近被拖动元素的index,开始找起，依次－－
          for (let k = end; k > start; k--) {
              // 判断是否进入以及移动
              let result = this.isEnterAndMove(k, centerY)
              if (result) {
                  isFind = true
                  break
              }
          }
          // 如果找到了直接跳出循环
          if (isFind) {
              break
          }
      }
    } else {
      for (let i = curIndex; i >= 0; i--) {
          let result = this.isEnterAndMove(i, centerY)
          if (result) break
      }
    }
  }

  DragList.prototype.lookDown = function (curIndex, centerY) {
    if (this.keyLength - curIndex > limit) {
      let isFind = false
      // 大的循环次数，比如从被拖拽的index是74，然后就要循环j次。74-84,84-94,94-100
      let j = Math.floor((this.keyLength - curIndex) / limit)
      for (let i = 1; i <= j; i++) {
          let start = curIndex + (i - 1) * limit
          let end = (curIndex + i * limit) > this.keyLength ? this.keyLength : (curIndex + i * limit)
          // 循环应该从靠近被拖动元素的index开始找起，依次++
          for (let k = start; k < end; k++) {
              // 判断是否进入以及移动
              let result = this.isEnterAndMove(k, centerY)
              if (result) {
                  isFind = true
                  break
              }
          }
          if (isFind) {
              break
          }
      }
    } else {
      for (let i = curIndex; i < this.keyLength; i++) {
          let result = this.isEnterAndMove(i, centerY)
          if (result) break
      }
    }
  }

  /**
  * 判断是否进入了某个节点区间，然后移动
  * @param  {Number} i 第i个节点
  * @param  {Number} y 当前被拖动元素中心y值
  * @return {Boolean}
  */
  DragList.prototype.isEnterAndMove = function (i, y) {
    // index: 0, 1, 2 ...
    let newIndex = Number(this.itemKeys[i])
    let beforeIndex = Number(this.itemKeys[i - 1])

    // { topline: .., bottomLine: ..., el: .. }
    let value = this.itemData[newIndex]
    let beaforeValue = this.itemData[beforeIndex] || null

    // 有一个bug，拖动速度过快时，index值没有及时改变
    // 所以处于padding处的y值没有被过滤，有大量无效遍历阻塞
    // 所以要再次过滤
    if (beaforeValue && y > beaforeValue.bottomLine && y < value.topLine) {
        return true
    }

    // 判断被拖拽的元素y轴高度，是否在某个节点的范围之内,同时不在当前节点内
    if (y <= value.bottomLine && y >= value.topLine && (newIndex !== obj.index)) {
        this.moveItem(newIndex)
        return true
    } else {
        return false
    }
  }

  DragList.prototype.moveItem = function (newIndex) {
    //  如果被拖拽元素一次性被往上拖了大于1个位置
    if (obj.index - newIndex > 1) {
      let diff = obj.index - newIndex

      // 那么有diff个节点需要移动，需要移动diff次
      for (let i = 0; i < diff; i++) {
          // 每次移动相邻节点
          this.moveUp(obj.index, obj.index - 1)
      }
    }

    // 如果被拖拽元素一次性被往下拖了大于1个位置
    if (obj.index - newIndex < -1) {
      let diff = newIndex - obj.index
      // 那么有diff个节点需要移动，需要移动diff次
      for (let i = 0; i < diff; i++) {
          // 每次移动相邻节点
          this.moveDown(obj.index, obj.index + 1)
      }
    }

    // 如果只移动了一个位置
    if (Math.abs(obj.index - newIndex) === 1) {
      if (obj.direction === 'up') {
          this.moveUp(obj.index, newIndex)
      } else {
          this.moveDown(obj.index, newIndex)
      }
    }
  }

  DragList.prototype.moveUp = function (nowIndex, newIndex) {
    let value = this.itemData[newIndex]
    // 被进入的元素
    let moveEl = value.el
    // 被进入元素的高
    let h = getStyle(moveEl, 'height')

    let moveY = this.itemData[nowIndex].bottomLine - value.topLine - h

    if (value.el.style.transform && value.el.style.transform !== `translate(0px, 0px)`) {
        value.el.style.transform = `translate(0px, 0px)`
    } else {
        value.el.style.transform = `translate(0px, ${moveY}px)`
    }

    let valTop = value.topLine

    value.bottomLine = this.itemData[nowIndex].bottomLine
    value.topLine = this.itemData[nowIndex].bottomLine - h

    this.itemData[nowIndex].topLine = valTop
    this.itemData[nowIndex].bottomLine = valTop + obj.height

    // 交换两节点的数据
    this.swapData(nowIndex, newIndex)
  }

  DragList.prototype.moveDown = function (nowIndex, newIndex) {
    // 被进入元素的数据
    let value = this.itemData[newIndex]
    // 被进入的元素
    let moveEl = value.el
    // 被进入元素的高
    let h = getStyle(moveEl, 'height')

    let moveY = this.itemData[nowIndex].topLine - value.topLine

    if (value.el.style.transform && value.el.style.transform !== `translate(0px, 0px)`) {
        value.el.style.transform = `translate(0px, 0px)`
    } else {
        value.el.style.transform = `translate(0px, ${moveY}px)`
    }

    // 更新节点的top值和bottom值
    let objTop = this.itemData[nowIndex].topLine

    this.itemData[nowIndex].bottomLine = value.bottomLine
    this.itemData[nowIndex].topLine = value.bottomLine - obj.height

    value.topLine = objTop
    value.bottomLine = objTop + h

    // 交换两个节点的数据
    this.swapData(nowIndex, newIndex)
  }

  DragList.prototype.swapData = function (nowIndex, newIndex) {
    // 当位置交换时，itemData里的数据也要做交换
    let temp1 = Object.assign({}, this.itemData[newIndex])
    let temp2 = Object.assign({}, this.itemData[nowIndex])
    let oldIndex = nowIndex

    // 交换data-index值
    obj.el.setAttribute('data-index', newIndex)
    this.itemData[newIndex].el.setAttribute('data-index', oldIndex)

    // itemData里的数据要做交换
    this.itemData[newIndex] = temp2
    this.itemData[nowIndex] = temp1
    // 更新当前index值
    obj.index = newIndex

    // item数组也要交换
    let oldItem = this.item[oldIndex]

    this.item[oldIndex] = this.item[newIndex]
    this.item[newIndex] = oldItem
  }

  DragList.prototype._initObjData = function (e) {
    if (e.target.parentNode === this.wrapper) {
      let target = e.target

      obj.index = Number(target.getAttribute('data-index'))

      obj.x = target.offsetLeft
      obj.y = target.offsetTop

      obj.el = target

      // 鼠标相对元素上方和左边的距离
      obj.diffX = e.pageX - obj.x
      obj.diffY = e.pageY - obj.y

      target.style.zIndex = zIndex++

      // let top = target.offsetTop
      let width = getStyle(target, 'width')
      let height = getStyle(target, 'height')

      obj.width = width
      obj.height = height

      // 给每个其他元素加上贝塞尔曲线
      // 可优化的点：如果元素过多，可只给上下一部分加？
      for (let i = 0; i < this.item.length; i++) {
          if (this.item[i] !== target) {
              this.item[i].style.webkitTransition = transitionStyle
          }
      }

      addClass(this.wrapper, 'active')
      addClass(target, 'item-active')

      isDrag = true
    }
  }

  DragList.prototype._end = function (e) {
    if (isDrag) {
      obj.el.style.webkitTransition = transitionStyle

      let index = obj.index

      let top = this.itemData[index].topLine
      let offTop = obj.el.offsetTop

      afterElem = (this.itemData[index + 1] && this.itemData[index + 1].el) || null

      // 注意当节点没有刷新时，offTop不会变，不管它translate了多少，而top是经过拖拽后计算的应该处于的位置
      // top - offTop 的值就是鼠标松开后，被拖拽元素应该回到的位置
      obj.el.style.transform = `translate(0px, ${top - offTop}px)`
    }
    isDrag = false
    isMouseDown = false
  }

  DragList.prototype._transitionEnd = function (e) {
    if (e.target !== obj.el) return

    removeClass(this.wrapper, 'active')
    removeClass(obj.el, 'item-active')

    for (let i = 0; i < this.item.length; i++) {
      this.item[i].style = ''
    }
    // 最后更新列表时, 直接插入节点，而不是原来重新渲染整个列表
    // 当节点很多的时候，比原来快了很多
    if (afterElem) {
      this.wrapper.removeChild(obj.el)
      this.wrapper.insertBefore(obj.el, afterElem)
    } else {
      this.wrapper.appendChild(obj.el)
    }
    if (this.options.dragEnd) {
      this.options.dragEnd.call(this, obj.el)
    }
  }
}
