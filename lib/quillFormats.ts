// Custom Quill formats for special content blocks
const InfoBlock = Quill.import('blots/block/embed')
class CustomInfoBlock extends InfoBlock {
  static create (value) {
    const node = super.create()
    node.classList.add('info-box')
    node.innerHTML = value
    return node
  }
}
CustomInfoBlock.blotName = 'info'
CustomInfoBlock.tagName = 'div'
Quill.register(CustomInfoBlock)

const RecipeBlock = Quill.import('blots/block/embed')

class RecipeBlot extends RecipeBlock {
  static create (value) {
    const node = super.create()
    node.setAttribute('data-recipe', JSON.stringify(value))
    node.classList.add('recipe-wrapper')
    return node
  }

  static value (node) {
    return JSON.parse(node.getAttribute('data-recipe'))
  }
}

RecipeBlot.blotName = 'recipe'
RecipeBlot.tagName = 'div'
Quill.register(RecipeBlot)
