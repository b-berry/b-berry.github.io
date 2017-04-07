#!/bin/bash

ICON_SIZE='40x64+0+0'

for n in icon-*.png; do
  convert $n -resize $ICON_SIZE! ${n#icon-};
  sleep 1
done
