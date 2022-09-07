function out(any) {console.log(any)}
out('Im in setbackground color xx')

const inpColor = document.querySelector(".getColor")
const pbSetColor = document.querySelector(".pbSetColor")
const pbSetColorNum = document.querySelector(".pbSetColorNum")

out(inpColor)

const bdy = document.querySelector("body")
out(bdy)

function changeBodyColor() {
  let col = inpColor.value;
  out(col)
  bdy.style.backgroundColor = col
}

function changeBodyColorNum() {
  let col = inpColor.value;
  const num = Number(col)
  const numhx = parseInt(col, 16)
  out(num)
  out(numhx)
  const hexcol = new Number(numhx).toString(16)
  out(hexcol)
  bdy.style.backgroundColor = "#" + hexcol
}


pbSetColor.addEventListener('click', changeBodyColor)
pbSetColorNum.addEventListener('click', changeBodyColorNum)

