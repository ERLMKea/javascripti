function out(any) {console.log(any)}
out('Im in setbackground color xx')

const inpColor = document.querySelector(".getColor")
const pbSetColor = document.querySelector(".pbSetColor")

out(inpColor)

const bdy = document.querySelector("body")
out(bdy)

function changeBodyColor() {
  let col = inpColor.value;
  out(col)
  bdy.style.backgroundColor = col
}

pbSetColor.addEventListener('click', changeBodyColor)
