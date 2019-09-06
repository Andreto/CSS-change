# CSS-change

```
for (i=0; i < changeData.length; i++){
  var elements = document.querySelectorAll(changeData[i][0]);
  for (var ii = 0; ii < elements.length; ii++) {
  	elements[ii].style = (changeData[i][1] + ": " + changeData[i][2] + ";");
  }
}
```

## changeData Syntax
Parameters
```
changeData = [
  [selectors, style, value]
]
```
Example:
```
changeData = [
  [".blocklyToolboxDiv", "background-color", "#21252b"],
  [[".gui_tab_27Unf", #blocklySvg], "width", "200px"]
]
```
