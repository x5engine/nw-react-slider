# 2.0.0 (September 29, 2016) (Nikhil)
* Don't fire onChange on render.
* Optionally opt-out of firing onChange while dragging.

## 1.1.0 (June 14, 2016) (Nikhil)
* Performance upgrades to the slider so that containers using its onChange handler can update itself before the slider re-renders itself.
* Added hooks for onDragStart, onDragEnd and pass the position in the onChange callback.