import fontforge
import psMat

target_top = 1000
margin = 50
font = fontforge.activeFont()

for name in font:
    glyph = font[name]
    if glyph.encoding == 0xE029:
        continue
    bbox = glyph.boundingBox()
    left, bottom, right, top = bbox
    width = right - left
    height = top - bottom
    if height == 0 or width == 0:
        continue
    scale = target_top / height
    glyph.transform(psMat.scale(scale))
    glyph.transform(psMat.translate(0, target_top - top * scale))
    new_width = width * scale
    target_center = (new_width + margin*2) / 2
    glyph_center = (left*scale + right*scale) / 2
    move_x = target_center - glyph_center
    glyph.transform(psMat.translate(move_x,0))
