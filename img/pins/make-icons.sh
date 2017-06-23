#!/bin/bash

ICON_SIZE='28x24+0+0'

for n in icon-*.png; do
  convert $n -resize $ICON_SIZE! ${n#icon-};
done
