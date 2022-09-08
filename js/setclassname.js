out("im in setclassname")

const inpElementName = document.getElementById("elementName")
const inpStyleName = document.getElementById("styleName")
const pbSetStyle = document.getElementById("pbSetStyle")

function setStyle() {
  let elmStr = inpElementName.value;
  out(elmStr);
  elm = document.querySelector("." + elmStr)
  let styleName = inpStyleName.value;
  out(styleName)
  out(elm.classList)

  elm.className = '';
  elm.classList.add(styleName);
  elm.classList.add(inpElementName.value); //this should add the element name to the classlist
  out(elm.classList)

}

pbSetStyle.addEventListener('click', setStyle)

