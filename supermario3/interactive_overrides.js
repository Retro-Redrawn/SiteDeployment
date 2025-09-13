/**
 * This script is intended to house function overrides specific to particular implementations.
 * 
 */

function UpdateFill(graphic, areaBox) {
    if (!bordersDisabled) { // Outline properties
        graphic.beginFill(0xffffff, 0)
        graphic.lineStyle(4, 0xffffff, 1, 1, false)
        graphic.drawRect(areaBox.x, areaBox.y, areaBox.width, areaBox.height);
        graphic.lineStyle(2, 0x000000, 1, 1, false)
        graphic.drawRect(areaBox.x, areaBox.y, areaBox.width, areaBox.height);
        graphic.endFill()
    }
}