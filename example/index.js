import DragList from '../src/index'

new DragList(document.querySelector('.items'), {
  dragStart (obj) {
    console.log('start', obj)
  },
  dragEnd (obj) {
    console.log('end', obj)
    console.log('aa')
  }
})
