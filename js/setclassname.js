out("im in setclassname")

const inpElementName = document.getElementById("elementName")
const inpStyleName = document.getElementById("styleName")
const pbSetStyle = document.getElementById("pbSetStyle")

function setStyle() {
  let elm = inpElementName.value;
  out(elm);
  let style = inpStyleName.value;
  out(style)
  elm.className = style;
}

pbSetStyle.addEventListener('click', setStyle)

