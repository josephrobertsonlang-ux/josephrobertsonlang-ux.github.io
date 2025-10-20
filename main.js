colors = [
  '#575757',
  '#5D5E60',
  '#BEB2C8',
  '#D7D6D6'
]

function hover (element,i){
    document.body.style.background = colors [i]
  document.body.classList.add('hovering')
}

function leave (element){
    document.body.style.background = "#555B5D"
  document.body.classList.remove('hovering')
}

