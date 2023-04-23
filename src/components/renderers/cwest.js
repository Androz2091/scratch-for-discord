import Blockly from "blockly";
CustomRenderer = function(name) {
    CustomRenderer.superClass_.constructor.call(this, name);
}
Blockly.utils.object.inherits(CustomRenderer, Blockly.blockRendering.Renderer)
Blockly.blockRendering.register('cwest', CustomRenderer)